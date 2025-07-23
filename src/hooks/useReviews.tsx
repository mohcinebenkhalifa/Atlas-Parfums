import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import { toast } from '@/hooks/use-toast';

export const useReviews = (productId?: string) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: async () => {
      console.log('Fetching reviews for productId:', productId);
      
      let query = supabase
        .from('reviews')
        .select(`
          *,
          products!inner(name)
        `)
        .order('created_at', { ascending: false });

      // Si c'est pour la page d'accueil (pas de productId), afficher plus d'avis
      if (!productId) {
        // Pour la page d'accueil, afficher les avis approuvés + les avis de l'utilisateur connecté
        if (user) {
          query = query.or(`is_approved.eq.true,user_id.eq.${user.id}`);
        } else {
          // Si pas d'utilisateur connecté, afficher tous les avis pour le moment (pour voir du contenu)
          // En production, vous voudrez probablement garder seulement les avis approuvés
          query = query.or('is_approved.eq.true,is_approved.eq.false');
        }
        // Limiter à 6 avis pour la page d'accueil
        query = query.limit(6);
      } else {
        // Pour une page produit spécifique
        query = query.eq('product_id', productId);
        
        // Afficher les avis approuvés + les avis de l'utilisateur connecté (même non approuvés)
        if (user) {
          query = query.or(`is_approved.eq.true,user_id.eq.${user.id}`);
        } else {
          query = query.eq('is_approved', true);
        }
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching reviews:', error);
        throw error;
      }

      console.log('Reviews fetched:', data);

      // Enrichir les données avec les informations utilisateur depuis les profils
      const enrichedData = await Promise.all(
        (data || []).map(async (review) => {
          try {
            const { data: profile } = await supabase
              .from('profiles')
              .select('full_name, avatar_url')
              .eq('id', review.user_id)
              .single();

            return {
              ...review,
              profiles: profile,
              products: Array.isArray(review.products) ? review.products[0] : review.products,
            };
          } catch (error) {
            console.warn('Could not fetch profile for user:', review.user_id, error);
            return {
              ...review,
              profiles: null,
              products: Array.isArray(review.products) ? review.products[0] : review.products,
            };
          }
        })
      );

      return enrichedData as Review[];
    },
  });

  const addReviewMutation = useMutation({
    mutationFn: async ({ 
      productId, 
      rating, 
      title, 
      comment 
    }: { 
      productId: string; 
      rating: number; 
      title?: string; 
      comment?: string; 
    }) => {
      if (!user) throw new Error('User not authenticated');

      console.log('Adding review:', { productId, rating, title, comment, userId: user.id });

      const { error } = await supabase
        .from('reviews')
        .insert({
          user_id: user.id,
          product_id: productId,
          rating,
          title,
          comment,
          is_approved: false, // Les avis doivent être approuvés
        });

      if (error) {
        console.error('Error adding review:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      toast({
        title: "Avis ajouté",
        description: "Votre avis a été soumis et sera visible immédiatement en attendant l'approbation",
      });
    },
    onError: (error) => {
      console.error('Error adding review:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter votre avis",
        variant: "destructive",
      });
    },
  });

  return {
    reviews,
    isLoading,
    addReview: addReviewMutation.mutate,
    isAddingReview: addReviewMutation.isPending,
  };
};
