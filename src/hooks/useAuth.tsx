import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Connexion
  const signIn = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Erreur de connexion');
    }
    setUser(data.user);
    localStorage.setItem('token', data.token);
    return data;
  };

  // Inscription
  const signUp = async (email, password, fullName) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name: fullName }),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Erreur d'inscription");
    }
    // We don't log the user in directly after signup in this model
    // They should go to the login page
    return data;
  };

  // Déconnexion
  const signOut = async () => {
    // No backend route for logout when using JWT, just remove the token
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const useProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return products;
};
