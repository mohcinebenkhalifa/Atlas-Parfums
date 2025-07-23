import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from './useAuth';
import { useCart } from './useCart';

export const useStripePayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { cartItems, totalPrice, clearCart } = useCart();

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `BKP${timestamp}${random}`;
  };

  const processPayment = async (paymentMethod: 'card' | 'paypal') => {
    if (!user) {
      toast({
        title: "Erreur",
        description: "Vous devez être connecté pour passer commande",
        variant: "destructive",
      });
      return;
    }

    if (cartItems.length === 0) {
      toast({
        title: "Erreur", 
        description: "Votre panier est vide",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Générer un numéro de commande unique
      const orderNumber = generateOrderNumber();

      // Créer la commande
      // ... existing code ...

      // Ajouter les articles de la commande
      // ... existing code ...

      // Simuler le processus de paiement
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mettre à jour le statut de la commande
      // ... existing code ...

      // Vider le panier
      await clearCart();

      toast({
        title: "Commande confirmée !",
        description: `Votre commande #${order.order_number} a été passée avec succès`,
      });

      return order;

    } catch (error) {
      console.error('Error processing payment:', error);
      toast({
        title: "Erreur de paiement",
        description: "Une erreur est survenue lors du traitement de votre commande",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    processPayment,
    isLoading,
  };
};
