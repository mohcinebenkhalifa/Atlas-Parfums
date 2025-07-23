
import React, { useState } from 'react';
import { ShoppingCart, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AddToCartAnimationProps {
  onAddToCart: () => void;
  isAdding: boolean;
  disabled?: boolean;
}

const AddToCartAnimation: React.FC<AddToCartAnimationProps> = ({
  onAddToCart,
  isAdding,
  disabled = false,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);

  const handleClick = async () => {
    if (disabled || isAdding) return;
    
    // Effet de découverte
    setShowDiscover(true);
    setTimeout(() => setShowDiscover(false), 600);
    
    // Appel de la fonction d'ajout
    onAddToCart();
    
    // Effet de succès après un délai
    setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 300);
  };

  return (
    <div className="relative">
      <Button
        className={`flex-1 transition-all duration-300 transform ${
          isAdding 
            ? 'bg-moroccan-amber/70 scale-95' 
            : showSuccess 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-moroccan-gold hover:bg-moroccan-amber hover:scale-105'
        } text-white relative overflow-hidden`}
        onClick={handleClick}
        disabled={disabled || isAdding}
      >
        {/* Effet de découverte en arrière-plan */}
        {showDiscover && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-white animate-spin" />
            </div>
          </div>
        )}
        
        {/* Contenu du bouton */}
        <div className="flex items-center space-x-2 relative z-10">
          {isAdding ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Ajout...</span>
            </>
          ) : showSuccess ? (
            <>
              <Check className="h-4 w-4 animate-bounce" />
              <span>Ajouté!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              <span>{disabled ? 'Rupture' : 'Ajouter'}</span>
            </>
          )}
        </div>

        {/* Effet de paillettes lors de l'ajout */}
        {showSuccess && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <Sparkles
                key={i}
                className={`absolute h-3 w-3 text-white animate-ping`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        )}
      </Button>
    </div>
  );
};

export default AddToCartAnimation;
