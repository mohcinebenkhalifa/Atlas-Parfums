
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-terracotta text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Notre équipe d'experts en parfumerie orientale est à votre disposition 
              pour vous conseiller et répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-moroccan-burgundy mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 text-lg">
                  Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-moroccan-burgundy mb-8">
                  Informations de contact
                </h2>
              </div>

              <div className="space-y-6">
                <Card className="border-moroccan-gold/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-moroccan-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-moroccan-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-moroccan-burgundy mb-2">
                          Adresse
                        </h3>
                        <p className="text-gray-600">
                          1 Rue Tata<br />
                          Sidi Bennour, Maroc
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-moroccan-gold/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-moroccan-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-moroccan-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-moroccan-burgundy mb-2">
                          Téléphone
                        </h3>
                        <p className="text-gray-600">
                          0653725806
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-moroccan-gold/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-moroccan-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-moroccan-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-moroccan-burgundy mb-2">
                          Email
                        </h3>
                        <p className="text-gray-600">
                          mohcinebenkhalifa50@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-moroccan-gold/20 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-moroccan-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-moroccan-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-moroccan-burgundy mb-2">
                          Horaires d'ouverture
                        </h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Lundi - Vendredi: 9h00 - 19h00</p>
                          <p>Samedi: 9h00 - 18h00</p>
                          <p>Dimanche: 10h00 - 17h00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-moroccan-burgundy mb-4">
              Trouvez-nous
            </h2>
            <p className="text-gray-600 text-lg">
              Visitez notre boutique à Sidi Bennour
            </p>
          </div>
          
          <Map />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
