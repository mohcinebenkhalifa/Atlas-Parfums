
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TextToSpeechButton from './TextToSpeechButton';
import AddToCartAnimation from './AddToCartAnimation';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { useProducts } from '@/hooks/useProducts';
import { toast } from '@/hooks/use-toast';
import { getUniqueProductImage } from '@/utils/productImages';

const FeaturedProducts = () => {
  const { user } = useAuth();
  const { addToCart, isAddingToCart } = useCart();
  
  // Récupérer les produits vedettes du catalogue
  const { data: featuredProducts = [], isLoading } = useProducts({ featured: true });

  const handleAddToCart = (productId: string) => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour ajouter des articles au panier",
        variant: "destructive",
      });
      return;
    }
    
    console.log('Adding to cart from featured products:', productId);
    addToCart({ productId });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'MAD',
    }).format(price);
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">Chargement des produits vedettes...</p>
          </div>
        </div>
      </section>
    );
  }

  // Prendre les 4 premiers produits vedettes
  const displayProducts = featuredProducts.slice(0, 4);

  return (
    <section className="py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-reveal">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-moroccan-burgundy animate-fade-in-up">
              Nos Parfums Vedettes
            </h2>
            <div className="animate-fade-in-up delay-200">
              <TextToSpeechButton
                text="Nos Parfums Vedettes. Découvrez notre sélection exclusive de parfums orientaux et occidentaux, créés avec les plus nobles essences"
                size="sm"
              />
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-300">
            Découvrez notre sélection exclusive de parfums orientaux et occidentaux, 
            créés avec les plus nobles essences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-500 animate-stagger hover:scale-105 hover:shadow-3xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image_url || getUniqueProductImage(product.name, product.category, product.brand)}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moroccan-burgundy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TextToSpeechButton
                    text={`${product.name}. ${product.description}. Prix: ${formatPrice(product.price)}.`}
                    className="bg-white/80 hover:bg-white"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-moroccan-burgundy mb-2 group-hover:text-moroccan-gold transition-colors duration-300">
                  {product.name}
                </h3>
                {product.brand && (
                  <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                )}
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-moroccan-gold">
                    {formatPrice(product.price)}
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <AddToCartAnimation
                    onAddToCart={() => handleAddToCart(product.id)}
                    isAdding={isAddingToCart}
                  />
                  <Button 
                    variant="outline" 
                    className="border-moroccan-gold text-moroccan-gold hover:bg-moroccan-gold hover:text-white transition-all duration-300"
                  >
                    Découvrir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up delay-600">
          <Button 
            className="bg-moroccan-burgundy hover:bg-moroccan-burgundy/90 text-white px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            onClick={() => window.location.href = '/catalog'}
          >
            Voir tous nos parfums
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
