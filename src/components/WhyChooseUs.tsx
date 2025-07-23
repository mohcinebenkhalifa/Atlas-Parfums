
import React from 'react';
import { Shield, Truck, Award, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Qualité Authentique',
      description: 'Parfums certifiés, fabriqués selon les traditions séculaires marocaines.',
      color: 'text-moroccan-gold'
    },
    {
      icon: Truck,
      title: 'Livraison Rapide',
      description: 'Expédition sous 24h partout au Maroc et en Europe.',
      color: 'text-moroccan-terracotta'
    },
    {
      icon: Award,
      title: 'Expertise Reconnue',
      description: '15 ans d\'expérience dans la création de parfums orientaux.',
      color: 'text-moroccan-amber'
    },
    {
      icon: Heart,
      title: 'Satisfaction Garantie',
      description: '30 jours pour changer d\'avis, remboursement intégral.',
      color: 'text-moroccan-burgundy'
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-moroccan-burgundy animate-fade-in-up">
            Pourquoi Choisir Parfum Maroc ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Notre passion pour l'excellence et notre engagement envers la tradition 
            font de nous votre partenaire de confiance pour les parfums orientaux.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl hover:bg-moroccan-gold/5 transition-all duration-500 group animate-stagger hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              <h3 className="text-xl font-semibold text-moroccan-burgundy group-hover:text-moroccan-gold transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 bg-gradient-to-r from-moroccan-gold/10 to-moroccan-amber/10 rounded-3xl p-8 lg:p-12 animate-fade-in-up delay-600 hover:shadow-xl transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-moroccan-burgundy animate-fade-in-up">
                L'avis de nos clients
              </h3>
              
              <blockquote className="text-lg text-gray-700 italic leading-relaxed animate-fade-in-up delay-200">
                "Une découverte extraordinaire ! Ces parfums m'ont transportée 
                directement dans les souks de Marrakech. La qualité est exceptionnelle 
                et la livraison très rapide."
              </blockquote>
              
              <div className="flex items-center gap-4 animate-fade-in-up delay-400">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Client satisfait"
                  className="w-12 h-12 rounded-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-moroccan-burgundy">Fatima El Mansouri</div>
                  <div className="text-sm text-gray-600">Cliente fidèle depuis 2019</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '4.8/5', label: 'Note moyenne', color: 'text-moroccan-gold' },
                { number: '2,450+', label: 'Avis clients', color: 'text-moroccan-terracotta' },
                { number: '98%', label: 'Satisfaction', color: 'text-moroccan-amber' },
                { number: '24h', label: 'Expédition', color: 'text-moroccan-sage' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-500 hover:scale-105 animate-stagger"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className={`text-3xl font-bold ${stat.color} hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
