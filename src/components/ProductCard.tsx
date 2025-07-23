import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TextToSpeechButton from './TextToSpeechButton';
import AddToCartAnimation from './AddToCartAnimation';
import { getUniqueProductImage } from '@/utils/productImages';

type Product = any; // Replace 'any' with the actual type of your product

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
  isFavorite?: boolean;
  isAddingToCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite = false,
  isAddingToCart = false,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'MAD',
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      oriental: 'Oriental',
      occidental: 'Occidental',
      mixte: 'Mixte',
      oud: 'Oud',
      musc: 'Musc',
      floral: 'Floral',
      boisé: 'Boisé',
      fruité: 'Fruité',
      homme_classique: 'Homme Classique',
      homme_moderne: 'Homme Moderne',
      homme_sport: 'Homme Sport',
      homme_luxe: 'Homme Luxe',
      homme_jeune: 'Homme Jeune',
      femme_classique: 'Femme Classique',
      femme_moderne: 'Femme Moderne',
      femme_luxe: 'Femme Luxe',
      femme_romantique: 'Femme Romantique',
      femme_jeune: 'Femme Jeune',
      enfant_garcon: 'Enfant Garçon',
      enfant_fille: 'Enfant Fille',
      enfant_bebe: 'Bébé',
      adolescent_garcon: 'Adolescent',
      adolescent_fille: 'Adolescente',
      senior_homme: 'Senior Homme',
      senior_femme: 'Senior Femme',
      unisexe_adulte: 'Unisexe',
      unisexe_jeune: 'Unisexe Jeune',
      collection_limitee: 'Édition Limitée',
    };
    return labels[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      homme_classique: 'bg-blue-100 text-blue-800',
      homme_moderne: 'bg-cyan-100 text-cyan-800',
      homme_sport: 'bg-green-100 text-green-800',
      homme_luxe: 'bg-purple-100 text-purple-800',
      homme_jeune: 'bg-teal-100 text-teal-800',
      femme_classique: 'bg-pink-100 text-pink-800',
      femme_moderne: 'bg-rose-100 text-rose-800',
      femme_luxe: 'bg-violet-100 text-violet-800',
      femme_romantique: 'bg-red-100 text-red-800',
      femme_jeune: 'bg-fuchsia-100 text-fuchsia-800',
      enfant_garcon: 'bg-sky-100 text-sky-800',
      enfant_fille: 'bg-pink-100 text-pink-800',
      enfant_bebe: 'bg-yellow-100 text-yellow-800',
      adolescent_garcon: 'bg-indigo-100 text-indigo-800',
      adolescent_fille: 'bg-purple-100 text-purple-800',
      senior_homme: 'bg-gray-100 text-gray-800',
      senior_femme: 'bg-stone-100 text-stone-800',
      unisexe_adulte: 'bg-neutral-100 text-neutral-800',
      unisexe_jeune: 'bg-slate-100 text-slate-800',
      collection_limitee: 'bg-amber-100 text-amber-800',
      oriental: 'bg-orange-100 text-orange-800',
      occidental: 'bg-blue-100 text-blue-800',
      oud: 'bg-amber-100 text-amber-800',
      musc: 'bg-brown-100 text-brown-800',
      floral: 'bg-pink-100 text-pink-800',
      boisé: 'bg-green-100 text-green-800',
      fruité: 'bg-red-100 text-red-800',
      mixte: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const imageUrl = product.image_url || getUniqueProductImage(product.name, product.category, product.brand);

  // Create text for speech
  const speechText = `${product.name}. ${product.description}. Prix: ${formatPrice(product.price)}.`;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback si l'image ne charge pas
              e.currentTarget.src = getUniqueProductImage(product.name, product.category, product.brand);
            }}
          />
        </div>
        
        {product.is_featured && (
          <Badge className="absolute top-2 left-2 bg-moroccan-gold text-white">
            Vedette
          </Badge>
        )}
        
        {product.original_price && product.original_price > product.price && (
          <Badge className="absolute top-2 right-12 bg-red-500 text-white">
            Promo
          </Badge>
        )}

        <div className="absolute top-2 right-2 flex gap-1">
          <TextToSpeechButton
            text={speechText}
            className="bg-white/80 hover:bg-white"
          />
          <Button
            variant="ghost"
            size="sm"
            className={`transition-all duration-300 bg-white/80 hover:bg-white ${isFavorite ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
            onClick={() => onToggleFavorite?.(product)}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="outline" className={`text-xs ${getCategoryColor(product.category)}`}>
            {getCategoryLabel(product.category)}
          </Badge>
          {product.collection_name && (
            <Badge variant="outline" className="text-xs ml-1 bg-gray-50 text-gray-600">
              {product.collection_name}
            </Badge>
          )}
        </div>
        
        <h3 className="font-semibold text-lg mb-1 text-moroccan-burgundy group-hover:text-moroccan-gold transition-colors">
          {product.name}
        </h3>
        
        {product.brand && (
          <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
        )}
        
        {product.size_ml && (
          <p className="text-sm text-gray-500 mb-2">{product.size_ml}ml</p>
        )}
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-moroccan-burgundy">
              {formatPrice(product.price)}
            </span>
            {product.original_price && product.original_price > product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.original_price)}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <AddToCartAnimation
            onAddToCart={() => onAddToCart?.(product)}
            isAdding={isAddingToCart}
            disabled={product.stock_quantity === 0}
          />
        </div>
        
        {product.stock_quantity <= 5 && product.stock_quantity > 0 && (
          <p className="text-xs text-orange-600 mt-2">
            Plus que {product.stock_quantity} en stock
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
