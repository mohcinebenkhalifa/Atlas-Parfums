import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/use-toast';

type Product = Database['public']['Tables']['products']['Row'];
type PerfumeCategory = Database['public']['Enums']['perfume_category'];

const ProductCatalog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PerfumeCategory | ''>('');
  const [showFeatured, setShowFeatured] = useState(false);

  const { user } = useAuth();
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const filters = {
    search: searchTerm || undefined,
    category: selectedCategory || undefined,
    featured: showFeatured || undefined,
  };

  const { data: products = [], isLoading, error } = useProducts(filters);

  const handleAddToCart = (product: Product) => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour ajouter des articles au panier",
        variant: "destructive",
      });
      return;
    }
    console.log('Adding to cart:', product);
    addToCart({ productId: product.id });
  };

  const handleToggleFavorite = (product: Product) => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour gérer vos favoris",
        variant: "destructive",
      });
      return;
    }
    console.log('Toggle favorite:', product);
    toggleFavorite(product.id);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setShowFeatured(false);
  };

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Erreur lors du chargement des produits</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-moroccan-burgundy mb-2">
          Notre Catalogue
        </h1>
        <p className="text-gray-600">
          Découvrez notre collection exclusive de parfums orientaux et occidentaux
        </p>
      </div>

      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        showFeatured={showFeatured}
        onFeaturedToggle={() => setShowFeatured(!showFeatured)}
        onClearFilters={handleClearFilters}
      />

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-moroccan-gold" />
          <span className="ml-2 text-gray-600">Chargement des produits...</span>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-gray-600">
              {products.length} produit{products.length !== 1 ? 's' : ''} trouvé{products.length !== 1 ? 's' : ''}
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun produit trouvé avec ces critères</p>
              <button
                onClick={handleClearFilters}
                className="mt-4 text-moroccan-gold hover:underline"
              >
                Effacer les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={user ? isFavorite(product.id) : false}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCatalog;
