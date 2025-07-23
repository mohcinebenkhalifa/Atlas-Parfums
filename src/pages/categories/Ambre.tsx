
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';

const Ambre = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-burgundy-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Collection Ambre
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            L'ambre, résine fossile aux vertus envoûtantes, révèle des notes 
            chaudes et réconfortantes. Nos parfums à l'ambre offrent une 
            expérience olfactive riche et enveloppante.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Nos Parfums à l'Ambre</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              L'ambre développe des facettes douces, poudrées et légèrement 
              vanillées qui apportent chaleur et sensualité. Découvrez nos 
              créations où l'ambre révèle toute sa splendeur.
            </p>
          </div>
          
          <ProductCatalog />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ambre;
