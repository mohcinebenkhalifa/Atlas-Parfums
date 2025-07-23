
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-moroccan-burgundy to-moroccan-terracotta text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Protection et utilisation de vos données personnelles
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
                  Collecte des informations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nous recueillons des informations lorsque vous vous inscrivez sur notre site, 
                  lorsque vous vous connectez à votre compte, faites un achat, participez à un 
                  concours, et/ou lorsque vous vous déconnectez.
                </p>
                <p>
                  Les informations recueillies incluent votre nom, votre adresse email, 
                  numéro de téléphone, et/ou carte de crédit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Utilisation des informations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Toutes les informations que nous recueillons auprès de vous peuvent être 
                  utilisées pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                  <li>Fournir un contenu publicitaire personnalisé</li>
                  <li>Améliorer notre site web</li>
                  <li>Améliorer le service client et vos besoins de prise en charge</li>
                  <li>Vous contacter par email</li>
                  <li>Administrer un concours, une promotion, ou une enquête</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Confidentialité du commerce en ligne
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nous sommes les seuls propriétaires des informations recueillies sur ce site. 
                  Vos informations personnelles ne seront pas vendues, échangées, transférées, 
                  ou données à une autre société pour n'importe quelle raison, sans votre 
                  consentement, en dehors de ce qui est nécessaire pour répondre à une demande 
                  et/ou transaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Divulgation à des tiers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Nous ne vendons, n'échangeons et ne transférons pas vos informations 
                  personnelles identifiables à des tiers. Cela ne comprend pas les tierces 
                  parties de confiance qui nous aident à exploiter notre site web ou à mener 
                  nos affaires, tant que ces parties conviennent de garder ces informations 
                  confidentielles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-moroccan-burgundy">
                  Vos droits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Vous avez le droit de demander l'accès aux données personnelles que nous 
                  détenons à votre sujet, de les corriger, de les supprimer ou de limiter 
                  leur traitement.
                </p>
                <p>
                  Pour exercer ces droits, contactez-nous à : mohcinebenkhalifa50@gmail.com
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

export default PrivacyPolicy;
