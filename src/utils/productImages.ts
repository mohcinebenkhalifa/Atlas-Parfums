
// Système d'images uniques pour les produits
export const productImageLibrary = {
  // Images spécifiques par marque et type de parfum
  luxury_bottles: [
    'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ],
  
  chanel_collection: [
    'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ],
  
  dior_collection: [
    'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ],
  
  lancome_collection: [
    'https://images.unsplash.com/photo-1559156970-d7a4596632e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1625308516009-b0d49f25a4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ],
  
  men_fragrances: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1506629905607-ce331a5c7f86?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1556228578-dd6a5b3b4ea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ],
  
  unisex_niche: [
    'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ],
  
  children_gentle: [
    'https://images.unsplash.com/photo-1516627145497-ae4099cce4cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1473181488821-2d23949a045a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1544776527-71a5bddff1ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  ],
};

// Assignation d'images spécifiques par nom de produit
export const specificProductImages: Record<string, string> = {
  "Coco Mademoiselle": productImageLibrary.chanel_collection[0],
  "Bleu de Chanel": productImageLibrary.chanel_collection[1],
  "J'adore": productImageLibrary.dior_collection[0],
  "Sauvage": productImageLibrary.dior_collection[1],
  "La Vie Est Belle": productImageLibrary.lancome_collection[0],
  "Libre": productImageLibrary.lancome_collection[1],
  "Bloom": productImageLibrary.luxury_bottles[2],
  "Light Blue": productImageLibrary.luxury_bottles[3],
  "Nina": productImageLibrary.luxury_bottles[4],
  "Terre d'Hermès": productImageLibrary.men_fragrances[0],
  "Baccarat Rouge 540": productImageLibrary.unisex_niche[0],
  "Oud Wood": productImageLibrary.unisex_niche[1],
  "Aventus": productImageLibrary.unisex_niche[2],
  "Tout Petit": productImageLibrary.children_gentle[0],
  "Lilirose": productImageLibrary.children_gentle[1],
  "Blue": productImageLibrary.children_gentle[2],
};

// Fonction pour obtenir une image unique basée sur le nom du produit et la catégorie
export const getUniqueProductImage = (productName: string, category: string, brand?: string): string => {
  // D'abord, vérifier si le produit a une image spécifique
  if (specificProductImages[productName]) {
    return specificProductImages[productName];
  }

  // Ensuite, choisir en fonction de la marque
  if (brand) {
    const brandLower = brand.toLowerCase();
    if (brandLower.includes('chanel') && productImageLibrary.chanel_collection.length > 0) {
      return productImageLibrary.chanel_collection[Math.abs(hashCode(productName)) % productImageLibrary.chanel_collection.length];
    }
    if (brandLower.includes('dior') && productImageLibrary.dior_collection.length > 0) {
      return productImageLibrary.dior_collection[Math.abs(hashCode(productName)) % productImageLibrary.dior_collection.length];
    }
    if (brandLower.includes('lancôme') && productImageLibrary.lancome_collection.length > 0) {
      return productImageLibrary.lancome_collection[Math.abs(hashCode(productName)) % productImageLibrary.lancome_collection.length];
    }
  }

  // Enfin, choisir en fonction de la catégorie
  let imageArray: string[] = [];
  
  if (category.includes('homme')) {
    imageArray = productImageLibrary.men_fragrances;
  } else if (category.includes('femme')) {
    imageArray = productImageLibrary.luxury_bottles;
  } else if (category.includes('unisexe') || category.includes('oud')) {
    imageArray = productImageLibrary.unisex_niche;
  } else if (category.includes('enfant') || category.includes('bebe')) {
    imageArray = productImageLibrary.children_gentle;
  } else {
    imageArray = productImageLibrary.luxury_bottles;
  }

  // Utiliser un hash du nom pour garantir la même image pour le même produit
  const index = Math.abs(hashCode(productName)) % imageArray.length;
  return imageArray[index];
};

// Fonction de hash simple pour garantir la consistance
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
}

// Fallback par catégorie
export const getFallbackImage = (category: string): string => {
  const fallbacks: Record<string, string> = {
    'femme_luxe': productImageLibrary.luxury_bottles[0],
    'femme_moderne': productImageLibrary.luxury_bottles[1],
    'femme_jeune': productImageLibrary.luxury_bottles[2],
    'homme_moderne': productImageLibrary.men_fragrances[0],
    'homme_luxe': productImageLibrary.men_fragrances[1],
    'homme_classique': productImageLibrary.men_fragrances[2],
    'unisexe_adulte': productImageLibrary.unisex_niche[0],
    'oud': productImageLibrary.unisex_niche[1],
    'enfant_bebe': productImageLibrary.children_gentle[0],
    'enfant_fille': productImageLibrary.children_gentle[1],
    'enfant_garcon': productImageLibrary.children_gentle[2],
  };
  
  return fallbacks[category] || productImageLibrary.luxury_bottles[0];
};
