// src/api/products.ts

import { API_BASE_URL } from './index';

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error("Erreur lors de la récupération des produits");
  return response.json();
}

export async function getProduct(id: string) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error("Erreur lors de la récupération du produit");
  return response.json();
}