
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-terracotta text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Informations légales relatives à Benkhalifa Parfum
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Éditeur du site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p><strong>Raison sociale :</strong> Benkhalifa Parfum</p>
                <p><strong>Adresse :</strong> 1 Rue Tata, Sidi Bennour, Maroc</p>
                <p><strong>Téléphone :</strong> 0653725806</p>
                <p><strong>Email :</strong> mohcinebenkhalifa50@gmail.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Hébergement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Ce site est hébergé par Lovable</p>
                <p>Pour plus d'informations sur l'hébergement, visitez : lovable.app</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Propriété intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  L'ensemble de ce site relève de la législation marocaine et internationale 
                  sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                  reproduction sont réservés, y compris pour les documents téléchargeables 
                  et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique 
                  quel qu'il soit est formellement interdite sauf autorisation expresse du 
                  directeur de la publication.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible 
                  et le site remis à jour à différentes périodes de l'année, mais peut 
                  toutefois contenir des inexactitudes ou des omissions.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un 
                  dysfonctionnement, merci de bien vouloir le signaler par email, 
                  à l'adresse mohcinebenkhalifa50@gmail.com, en décrivant le problème 
                  de la façon la plus précise possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;
