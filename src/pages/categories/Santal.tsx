
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';

const Santal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-burgundy-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Collection Santal
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Le santal, bois sacré aux vertus apaisantes, offre des notes 
            crémeuses et veloutées d'une rare élégance. Nos parfums au santal 
            invitent à la méditation et à la sérénité.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nos Parfums au Santal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Le santal développe des facettes boisées, lactées et poudrées 
              d'une douceur exceptionnelle. Chaque création de notre collection 
              révèle la noblesse et la sophistication de ce bois précieux.
            </p>
          </div>
          
          <ProductCatalog />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Santal;
