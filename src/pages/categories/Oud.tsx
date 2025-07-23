
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';

const Oud = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-burgundy-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Collection Oud
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            L'oud, appelé "l'or noir de la parfumerie", est une essence rare et précieuse 
            qui symbolise le luxe et la sophistication. Nos parfums à l'oud offrent 
            une expérience olfactive riche et complexe.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nos Parfums à l'Oud</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Issu du bois d'agar, l'oud développe des notes boisées, fumées et animales 
              d'une profondeur exceptionnelle. Chaque parfum de notre collection oud 
              est une invitation au voyage dans l'Orient mystérieux.
            </p>
          </div>
          
          <ProductCatalog />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Oud;
