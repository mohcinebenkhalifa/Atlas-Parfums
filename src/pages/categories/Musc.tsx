
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';

const Musc = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-burgundy-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Collection Musc
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez nos parfums au musc, une fragrance sensuelle et envoûtante 
            qui évoque la tradition parfumière orientale. Le musc apporte une profondeur 
            et une chaleur incomparables à nos créations.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nos Parfums au Musc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Le musc est l'une des notes les plus précieuses en parfumerie. 
              Nos créations capturent l'essence pure de cette fragrance mythique, 
              alliant tradition et modernité pour des parfums d'exception.
            </p>
          </div>
          
          <ProductCatalog />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Musc;
