import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import { toast } from '@/hooks/use-toast';

export const useFavorites = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: favorites = [], isLoading } = useQuery({
    queryKey: ['favorites', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      // Lignes à supprimer :
      // const { data, error } = await supabase
      //   .from('favorites')
      //   .select(`
      //     *,
      //     product:products(*)
      //   `)
      //   .eq('user_id', user.id);

      // if (error) {
      //   console.error('Error fetching favorites:', error);
      //   throw error;
      // }

      return [];
    },
    enabled: !!user,
  });

  const toggleFavoriteMutation = useMutation({
    mutationFn: async (productId: string) => {
      if (!user) throw new Error('User not authenticated');

      const existingFavorite = favorites.find(fav => fav.product_id === productId);

      if (existingFavorite) {
        // Remove from favorites
        // const { error } = await supabase
        //   .from('favorites')
        //   .delete()
        //   .eq('id', existingFavorite.id);

        // if (error) throw error;
        return 'removed';
      } else {
        // Add to favorites
        // const { error } = await supabase
        //   .from('favorites')
        //   .insert({
        //     user_id: user.id,
        //     product_id: productId,
        //   });

        // if (error) throw error;
        return 'added';
      }
    },
    onSuccess: (action) => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
      toast({
        title: action === 'added' ? "Ajouté aux favoris" : "Retiré des favoris",
        description: action === 'added' 
          ? "L'article a été ajouté à vos favoris" 
          : "L'article a été retiré de vos favoris",
      });
    },
    onError: (error) => {
      console.error('Error toggling favorite:', error);
      toast({
        title: "Erreur",
        description: "Impossible de modifier les favoris",
        variant: "destructive",
      });
    },
  });

  const isFavorite = (productId: string) => {
    return favorites.some(fav => fav.product_id === productId);
  };

  return {
    favorites,
    isLoading,
    toggleFavorite: toggleFavoriteMutation.mutate,
    isFavorite,
    isToggling: toggleFavoriteMutation.isPending,
  };
};
