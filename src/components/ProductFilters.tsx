import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCategories } from '@/hooks/useProducts';

type PerfumeCategory = string;

interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (search: string) => void;
  selectedCategory: PerfumeCategory | '';
  onCategoryChange: (category: PerfumeCategory | '') => void;
  showFeatured: boolean;
  onFeaturedToggle: () => void;
  onClearFilters: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  showFeatured,
  onFeaturedToggle,
  onClearFilters,
}) => {
  const { data: categories = [] } = useCategories();

  const getCategoryOptions = (): Array<{ group: string; categories: Array<[PerfumeCategory, string]> }> => {
    const categoryGroups = [
      {
        group: 'Parfums Orientaux',
        categories: [
          ['oriental', 'Oriental'],
          ['oud', 'Oud'],
          ['musc', 'Musc'],
        ] as Array<[PerfumeCategory, string]>
      },
      {
        group: 'Parfums Occidentaux',
        categories: [
          ['occidental', 'Occidental'],
          ['floral', 'Floral'],
          ['boisé', 'Boisé'],
          ['fruité', 'Fruité'],
        ] as Array<[PerfumeCategory, string]>
      },
      {
        group: 'Homme',
        categories: [
          ['homme_classique', 'Homme Classique'],
          ['homme_moderne', 'Homme Moderne'],
          ['homme_sport', 'Homme Sport'],
          ['homme_luxe', 'Homme Luxe'],
          ['homme_jeune', 'Homme Jeune'],
        ] as Array<[PerfumeCategory, string]>
      },
      {
        group: 'Femme',
        categories: [
          ['femme_classique', 'Femme Classique'],
          ['femme_moderne', 'Femme Moderne'],
          ['femme_luxe', 'Femme Luxe'],
          ['femme_romantique', 'Femme Romantique'],
          ['femme_jeune', 'Femme Jeune'],
        ] as Array<[PerfumeCategory, string]>
      },
      {
        group: 'Enfants & Adolescents',
        categories: [
          ['enfant_garcon', 'Enfant Garçon'],
          ['enfant_fille', 'Enfant Fille'],
          ['enfant_bebe', 'Bébé'],
          ['adolescent_garcon', 'Adolescent Garçon'],
          ['adolescent_fille', 'Adolescente'],
        ] as Array<[PerfumeCategory, string]>
      },
      {
        group: 'Seniors & Unisexe',
        categories: [
          ['senior_homme', 'Senior Homme'],
          ['senior_femme', 'Senior Femme'],
          ['unisexe_adulte', 'Unisexe Adulte'],
          ['unisexe_jeune', 'Unisexe Jeune'],
        ] as Array<[PerfumeCategory, string]>
      },
      {
        group: 'Collections Spéciales',
        categories: [
          ['mixte', 'Mixte'],
          ['collection_limitee', 'Collection Limitée'],
        ] as Array<[PerfumeCategory, string]>
      }
    ];
    
    return categoryGroups;
  };

  const hasActiveFilters = searchTerm || selectedCategory || showFeatured;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-moroccan-gold/20 p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-moroccan-gold" />
        <h3 className="text-lg font-semibold text-moroccan-burgundy">Filtres</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="ml-auto text-gray-500 hover:text-moroccan-gold"
          >
            <X className="h-4 w-4 mr-1" />
            Effacer
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Recherche */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Rechercher un parfum..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-moroccan-gold/30 focus:border-moroccan-gold"
          />
        </div>

        {/* Catégorie */}
        <Select value={selectedCategory || 'all'} onValueChange={(value) => onCategoryChange(value === 'all' ? '' : value as PerfumeCategory)}>
          <SelectTrigger className="border-moroccan-gold/30 focus:border-moroccan-gold">
            <SelectValue placeholder="Toutes les catégories" />
          </SelectTrigger>
          <SelectContent className="max-h-80">
            <SelectItem value="all">Toutes les catégories</SelectItem>
            {getCategoryOptions().map((group) => (
              <div key={group.group}>
                <div className="px-2 py-1 text-sm font-medium text-moroccan-burgundy bg-moroccan-gold/10 sticky top-0">
                  {group.group}
                </div>
                {group.categories.map(([value, label]) => (
                  <SelectItem key={value} value={value} className="pl-4">
                    {label}
                  </SelectItem>
                ))}
              </div>
            ))}
          </SelectContent>
        </Select>

        {/* Produits vedettes */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="featured"
            checked={showFeatured}
            onCheckedChange={onFeaturedToggle}
            className="data-[state=checked]:bg-moroccan-gold border-moroccan-gold"
          />
          <label
            htmlFor="featured"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Produits vedettes uniquement
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
