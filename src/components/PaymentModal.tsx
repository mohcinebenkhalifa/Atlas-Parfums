
import React, { useState } from 'react';
import { CreditCard, Smartphone, DollarSign } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useStripePayment } from '@/hooks/useStripePayment';
import { useCart } from '@/hooks/useCart';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'paypal' | null>('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });
  
  const { processPayment, isLoading } = useStripePayment();
  const { totalPrice } = useCart();

  const paymentMethods = [
    {
      id: 'card' as const,
      name: 'Carte bancaire',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express',
    },
    {
      id: 'paypal' as const,
      name: 'PayPal',
      icon: DollarSign,
      description: 'Payer avec votre compte PayPal',
    },
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      setSelectedMethod('card');
      return;
    }
    
    try {
      const order = await processPayment(selectedMethod);
      if (order) {
        onClose();
      }
    } catch (error) {
      // Error is handled in the hook
    }
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
  };

  const isFormValid = () => {
    if (selectedMethod === 'card') {
      return cardData.name.trim() && 
             cardData.number.replace(/\s/g, '').length >= 16 && 
             cardData.expiry.length >= 5 && 
             cardData.cvc.length >= 3;
    }
    return selectedMethod === 'paypal';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Finaliser votre commande</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Résumé du total */}
          <div className="bg-gradient-to-r from-moroccan-gold/10 to-moroccan-burgundy/10 p-4 rounded-lg border">
            <p className="text-lg font-semibold text-center">
              Total à payer : <span className="text-moroccan-burgundy">{totalPrice.toFixed(2)} MAD</span>
            </p>
          </div>

          {/* Sélection du mode de paiement */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Choisissez votre mode de paiement</h3>
            <div className="grid gap-3">
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  className={`cursor-pointer transition-all hover:shadow-md border-2 ${
                    selectedMethod === method.id 
                      ? 'ring-2 ring-moroccan-gold border-moroccan-gold bg-moroccan-gold/5' 
                      : 'border-gray-200 hover:border-moroccan-gold/50'
                  }`}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <method.icon className="w-6 h-6 mr-3 text-moroccan-burgundy" />
                    <div className="flex-1">
                      <CardTitle className="text-base">{method.name}</CardTitle>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                    {selectedMethod === method.id && (
                      <div className="w-4 h-4 rounded-full bg-moroccan-gold"></div>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Formulaire de carte bancaire */}
          {selectedMethod === 'card' && (
            <Card className="border-moroccan-gold/30">
              <CardHeader>
                <CardTitle className="text-moroccan-burgundy">Informations de carte bancaire</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cardName" className="text-sm font-medium">Nom sur la carte *</Label>
                  <Input
                    id="cardName"
                    placeholder="Ex: Jean Dupont"
                    value={cardData.name}
                    onChange={(e) => setCardData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber" className="text-sm font-medium">Numéro de carte *</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardData.number}
                    onChange={(e) => setCardData(prev => ({ 
                      ...prev, 
                      number: formatCardNumber(e.target.value) 
                    }))}
                    maxLength={19}
                    className="mt-1"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-sm font-medium">Date d'expiration *</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={cardData.expiry}
                      onChange={(e) => setCardData(prev => ({ 
                        ...prev, 
                        expiry: formatExpiry(e.target.value) 
                      }))}
                      maxLength={5}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="text-sm font-medium">Code CVC *</Label>
                    <Input
                      id="cvc"
                      placeholder="123"
                      value={cardData.cvc}
                      onChange={(e) => setCardData(prev => ({ 
                        ...prev, 
                        cvc: e.target.value.replace(/\D/g, '') 
                      }))}
                      maxLength={4}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  * Champs obligatoires
                </p>
              </CardContent>
            </Card>
          )}

          {/* Message pour PayPal */}
          {selectedMethod === 'paypal' && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-700 text-center">
                Vous serez redirigé vers PayPal pour finaliser votre paiement en toute sécurité.
              </p>
            </div>
          )}

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1 border-gray-300 hover:bg-gray-50"
              disabled={isLoading}
            >
              Annuler
            </Button>
            <Button 
              onClick={handlePayment}
              disabled={isLoading || !isFormValid()}
              className="flex-1 bg-moroccan-burgundy hover:bg-moroccan-burgundy/90 text-white"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Traitement...
                </div>
              ) : (
                `Payer ${totalPrice.toFixed(2)} MAD`
              )}
            </Button>
          </div>

          {/* Sécurité */}
          <div className="text-center text-xs text-gray-500">
            <p>🔒 Paiement sécurisé - Vos données sont protégées</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
