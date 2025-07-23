
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomerReviews from '@/components/CustomerReviews';

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-burgundy-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Avis Clients
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez les expériences de nos clients avec nos parfums de luxe. 
            Partagez votre propre avis et aidez d'autres passionnés de parfumerie 
            à faire leur choix.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CustomerReviews showAddReview={true} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
