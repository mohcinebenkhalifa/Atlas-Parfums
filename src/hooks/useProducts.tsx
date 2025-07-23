import { useQuery } from '@tanstack/react-query';
import { catalogProducts } from '@/data/catalogProducts';

type Product = Database['public']['Tables']['products']['Row'];
type Category = Database['public']['Tables']['categories']['Row'];
type PerfumeCategory = Database['public']['Enums']['perfume_category'];

const API_URL = 'http://localhost:5000/api';

// Fonction pour générer un UUID v4 valide
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Cache pour maintenir la cohérence des UUIDs
const productUUIDs = new Map<number, string>();

const getProductUUID = (index: number): string => {
  if (!productUUIDs.has(index)) {
    productUUIDs.set(index, generateUUID());
  }
  return productUUIDs.get(index)!;
};

export const useProducts = (filters?: {
  category?: PerfumeCategory;
  search?: string;
  featured?: boolean;
}) => {
  return useQuery<Product[]>({
    queryKey: ['products', filters],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let products = await response.json();

      if (filters?.category) {
        products = products.filter((product: Product) => product.category === filters.category);
      }

      if (filters?.featured) {
        products = products.filter((product: Product) => product.is_featured);
      }

      if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        products = products.filter((product: Product) =>
          product.name.toLowerCase().includes(searchLower) ||
          (product.brand && product.brand.toLowerCase().includes(searchLower)) ||
          (product.description && product.description.toLowerCase().includes(searchLower))
        );
      }

      return products;
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }

      return data as Category[];
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
        throw error;
      }

      return data as Product;
    },
    enabled: !!id,
  });
};
