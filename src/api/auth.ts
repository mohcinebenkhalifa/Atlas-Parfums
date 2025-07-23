// src/api/auth.ts

import { API_BASE_URL } from './index';

export async function login(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error("Erreur de connexion");
  return response.json();
}

export async function register(email: string, password: string, name: string) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password, name }),
  });
  if (!response.ok) throw new Error("Erreur d'inscription");
  return response.json();
}

export async function logout() {
  const response = await fetch(`${API_BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) throw new Error("Erreur de déconnexion");
  return response.json();
}