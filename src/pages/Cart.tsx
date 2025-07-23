
import React, { useState, useEffect } from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentModal from '@/components/PaymentModal';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart, isLoading } = useCart();
  const { user } = useAuth();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Panier - Ben Khalifa Parfum';
  }, []);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
    } else {
      updateQuantity({ itemId, quantity: newQuantity });
    }
  };

  const handleCheckout = () => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour finaliser votre commande",
        variant: "destructive",
      });
      return;
    }
    setIsPaymentModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">Chargement du panier...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Mon Panier ({totalItems})</h1>
          
          {cartItems.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h2 className="text-xl font-semibold mb-2">Votre panier est vide</h2>
                <p className="text-gray-600 mb-6">Découvrez notre collection de parfums de luxe</p>
                <Link to="/catalog">
                  <Button>Découvrir nos parfums</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Liste des articles */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.product?.image_url || '/placeholder.svg'}
                          alt={item.product?.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.product?.name}</h3>
                          <p className="text-gray-600">{item.product?.brand}</p>
                          <p className="text-lg font-bold text-primary">
                            {Number(item.product?.price || 0).toFixed(2)} MAD
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Résumé de commande */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Résumé de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Sous-total</span>
                      <span>{totalPrice.toFixed(2)} MAD</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Livraison</span>
                      <span className="text-green-600">
                        {totalPrice >= 500 ? 'Gratuite' : '30 MAD'}
                      </span>
                    </div>
                    
                    <hr />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{(totalPrice + (totalPrice >= 500 ? 0 : 30)).toFixed(2)} MAD</span>
                    </div>
                    
                    {totalPrice < 500 && (
                      <p className="text-sm text-gray-600">
                        Ajoutez {(500 - totalPrice).toFixed(2)} MAD pour bénéficier de la livraison gratuite
                      </p>
                    )}
                    
                    <Button 
                      className="w-full" 
                      onClick={handleCheckout}
                      size="lg"
                    >
                      Finaliser la commande
                    </Button>
                    
                    <Link to="/catalog" className="block">
                      <Button variant="outline" className="w-full">
                        Continuer mes achats
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
    </div>
  );
};

export default Cart;
