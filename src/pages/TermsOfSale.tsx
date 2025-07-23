
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfSale = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-terracotta text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conditions Générales de Vente
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Conditions d'achat et de vente chez Benkhalifa Parfum
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
                  Article 1 - Objet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les présentes conditions générales de vente (CGV) s'appliquent de plein 
                  droit aux ventes de parfums orientaux réalisées par Benkhalifa Parfum. 
                  Elles régissent les relations contractuelles entre Benkhalifa Parfum et 
                  ses clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Article 2 - Prix
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les prix de nos produits sont indiqués en dirhams marocains toutes taxes 
                  comprises (TTC). Les prix affichés sur le site sont ceux en vigueur au 
                  jour de la commande.
                </p>
                <p>
                  Benkhalifa Parfum se réserve le droit de modifier ses prix à tout moment, 
                  mais les produits seront facturés sur la base des tarifs en vigueur au 
                  moment de l'enregistrement des commandes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Article 3 - Commandes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Vous pouvez passer commande directement sur notre site internet ou en nous 
                  contactant par téléphone au 0653725806 ou par email à 
                  mohcinebenkhalifa50@gmail.com.
                </p>
                <p>
                  Toute commande figurant sur le site internet suppose l'adhésion aux 
                  présentes conditions générales de vente.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Article 4 - Livraison
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les livraisons sont effectuées à l'adresse indiquée par l'acheteur lors 
                  de sa commande. Les délais de livraison sont donnés à titre indicatif et 
                  ne constituent pas un engagement ferme.
                </p>
                <p>
                  Benkhalifa Parfum ne saurait être tenu responsable des conséquences dues 
                  aux retards de livraison.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Article 5 - Paiement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Le règlement de vos achats peut s'effectuer :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Par carte bancaire</li>
                  <li>Par virement bancaire</li>
                  <li>En espèces (pour les retraits en magasin)</li>
                </ul>
                <p>
                  Le paiement est dû intégralement à la commande.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Article 6 - Droit de rétractation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Conformément à la législation en vigueur, vous disposez d'un délai de 
                  14 jours à compter de la réception de votre commande pour exercer votre 
                  droit de rétractation.
                </p>
                <p>
                  Pour être acceptés, les retours doivent être effectués dans leur emballage 
                  d'origine, en parfait état, accompagnés de la facture d'achat.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Article 7 - Garanties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Tous nos produits sont garantis contre les vices de fabrication. En cas 
                  de défaut de conformité, nous nous engageons à reprendre le produit et 
                  à vous rembourser ou échanger celui-ci.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Article 8 - Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Pour toute question relative à nos CGV ou à votre commande, vous pouvez nous 
                  contacter par téléphone au 0653725806 ou par email à mohcinebenkhalifa50@gmail.com.
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

export default TermsOfSale;
