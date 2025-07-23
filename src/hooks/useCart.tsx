import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from './useAuth';
import { useApiError } from './useApiError'; // <-- Ajout
import { useEffect } from 'react';
// ... (autres imports)

interface AddToCartPayload {
  productId: string;
  quantity?: number;
}

export const useCart = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const showError = useApiError(); // <-- Ajout

  // Récupérer le panier
  const { data: cartItems = [], isLoading, error } = useQuery({
    queryKey: ['cart', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const response = await fetch(`http://localhost:8000/api/cart`, {
        credentials: 'include',
      });
      if (!response.ok) throw new Error("Erreur lors de la récupération du panier");
      return await response.json();
    },
    enabled: !!user,
  });

  useEffect(() => {
    if (error) showError(error, "Impossible de charger le panier");
  }, [error]);

  // Ajouter au panier
  const addToCartMutation = useMutation({
    mutationFn: async ({ productId, quantity = 1 }: AddToCartPayload) => {
      if (!user) throw new Error('User not authenticated');
      const response = await fetch(`http://localhost:8000/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ product_id: productId, quantity }),
      });
      if (!response.ok) throw new Error('Erreur lors de l\'ajout au panier');
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error) => showError(error, "Impossible d'ajouter au panier"), // <-- Ajout
  });

  // Calculs
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.quantity * (item.product?.price || 0)), 0);

  return {
    cartItems,
    isLoading,
    totalItems,
    totalPrice,
    addToCart: addToCartMutation.mutate,
    // Ajoute ici les autres mutations si tu les as (updateQuantity, removeFromCart, clearCart, etc.)
  };
};