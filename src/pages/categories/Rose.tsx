
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';

const Rose = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-burgundy-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Collection Rose
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            La rose, reine des fleurs, incarne la beauté, l'amour et la féminité. 
            Nos parfums à la rose célèbrent cette fleur emblématique avec des 
            compositions raffinées et romantiques.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nos Parfums à la Rose</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              De la rose de Damas à la rose bulgare, nos créations explorent 
              toutes les facettes de cette fleur noble. Chaque parfum révèle 
              la délicatesse et l'intensité de la rose dans des compositions modernes.
            </p>
          </div>
          
          <ProductCatalog />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rose;
