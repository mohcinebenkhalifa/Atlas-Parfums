// src/api/index.ts

export const API_BASE_URL = "http://localhost:8000/api";

// Récupérer le panier de l'utilisateur connecté
export async function getCart() {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("Erreur lors de la récupération du panier");
  return response.json();
}

// Ajouter un produit au panier
export async function addToCart(productId: string, quantity: number = 1) {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ product_id: productId, quantity }),
  });
  if (!response.ok) throw new Error("Erreur lors de l'ajout au panier");
  return response.json();
}

// Mettre à jour la quantité d'un article du panier
export async function updateCartItem(itemId: number, quantity: number) {
  const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ quantity }),
  });
  if (!response.ok) throw new Error("Erreur lors de la mise à jour du panier");
  return response.json();
}

// Supprimer un article du panier
export async function removeCartItem(itemId: number) {
  const response = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) throw new Error("Erreur lors de la suppression du panier");
  return response.json();
}

// Vider le panier
export async function clearCart() {
  const response = await fetch(`${API_BASE_URL}/cart`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) throw new Error("Erreur lors du vidage du panier");
  return response.json();
}