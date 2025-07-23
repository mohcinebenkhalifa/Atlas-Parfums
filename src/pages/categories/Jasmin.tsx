
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';

const Jasmin = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-burgundy-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Collection Jasmin
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Le jasmin, fleur de la nuit aux senteurs enivrantes, symbolise 
            la séduction et l'élégance. Nos parfums au jasmin capturent 
            l'essence pure de cette fleur mythique orientale.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nos Parfums au Jasmin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Le jasmin révèle des notes florales intenses et suaves, 
              légèrement animalées. Nos compositions mettent en valeur 
              cette fleur précieuse dans des créations sophistiquées et sensuelles.
            </p>
          </div>
          
          <ProductCatalog />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jasmin;
