
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqCategories = [
    {
      category: "Commandes et Livraison",
      questions: [
        {
          question: "Quels sont les délais de livraison ?",
          answer: "Nous livrons partout au Maroc sous 2-3 jours ouvrables. Pour Casablanca et Rabat, la livraison express est disponible en 24h. Les livraisons internationales prennent 5-7 jours ouvrables."
        },
        {
          question: "Quels sont les frais de livraison ?",
          answer: "La livraison est gratuite pour toute commande supérieure à 500 DH. En dessous, les frais sont de 30 DH au Maroc et 15€ pour l'international."
        },
        {
          question: "Puis-je modifier ou annuler ma commande ?",
          answer: "Vous pouvez modifier ou annuler votre commande dans les 2 heures suivant sa validation. Passé ce délai, contactez notre service client qui étudiera votre demande."
        }
      ]
    },
    {
      category: "Parfums et Produits",
      questions: [
        {
          question: "Quelle est la différence entre vos différentes gammes ?",
          answer: "Notre gamme 'Tradition' utilise des formules ancestrales, 'Moderne' propose des créations contemporaines, et 'Prestige' offre des parfums rares avec des ingrédients d'exception."
        },
        {
          question: "Combien de temps durent vos parfums ?",
          answer: "Nos parfums orientaux ont une excellente tenue : 8-12 heures pour les eaux de parfum et 6-8 heures pour les eaux de toilette. La durée peut varier selon votre type de peau."
        },
        {
          question: "Proposez-vous des échantillons ?",
          answer: "Oui ! Nous offrons des échantillons gratuits avec chaque commande. Vous pouvez aussi commander un coffret découverte avec 6 échantillons de 2ml pour 99 DH."
        }
      ]
    },
    {
      category: "Retours et Garanties",
      questions: [
        {
          question: "Quelle est votre politique de retour ?",
          answer: "Vous disposez de 30 jours pour retourner un produit non ouvert. Les parfums ouverts peuvent être échangés uniquement en cas de défaut de fabrication."
        },
        {
          question: "Comment procéder à un retour ?",
          answer: "Contactez notre service client avec votre numéro de commande. Nous vous fournirons une étiquette de retour prépayée et les instructions détaillées."
        },
        {
          question: "Que faire si mon colis arrive endommagé ?",
          answer: "Prenez des photos du colis et du produit endommagé, puis contactez-nous immédiatement. Nous organiserons un remplacement gratuit dans les 48h."
        }
      ]
    },
    {
      category: "Compte et Paiement",
      questions: [
        {
          question: "Quels moyens de paiement acceptez-vous ?",
          answer: "Nous acceptons les cartes Visa, Mastercard, le paiement à la livraison, les virements bancaires et les portefeuilles électroniques comme PayPal."
        },
        {
          question: "Comment créer un compte ?",
          answer: "Cliquez sur 'Se connecter' en haut de la page, puis sur 'Créer un compte'. Vous pouvez aussi vous inscrire avec votre compte Google pour plus de simplicité."
        },
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Absolument. Nous utilisons un chiffrement SSL et respectons le RGPD. Vos données personnelles et bancaires sont protégées selon les plus hauts standards de sécurité."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-moroccan-sand via-white to-moroccan-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-moroccan-burgundy mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à toutes vos questions sur nos parfums, 
            livraisons, et services.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-moroccan-burgundy mb-6 border-b-2 border-moroccan-gold pb-2">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="border border-moroccan-gold/20 rounded-lg px-6 bg-white/50"
                  >
                    <AccordionTrigger className="text-left font-semibold text-moroccan-burgundy hover:text-moroccan-gold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-gradient-to-r from-moroccan-burgundy to-moroccan-gold rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Vous n'avez pas trouvé votre réponse ?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous aider. 
            Contactez-nous par le moyen qui vous convient le mieux.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Button size="lg" className="bg-white text-moroccan-burgundy hover:bg-moroccan-cream flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email
            </Button>
            <Button size="lg" className="bg-white text-moroccan-burgundy hover:bg-moroccan-cream flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Téléphone
            </Button>
            <Button size="lg" className="bg-white text-moroccan-burgundy hover:bg-moroccan-cream flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
