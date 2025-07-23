
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-moroccan-burgundy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Restez Informé de Nos Nouveautés
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Inscrivez-vous à notre newsletter et recevez en exclusivité nos nouvelles 
              créations, offres spéciales et conseils d'experts en parfumerie orientale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-moroccan-gold"
              />
              <Button className="bg-moroccan-gold hover:bg-moroccan-gold-dark text-white">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/lovable-uploads/33f9d4e7-8979-44fa-bf04-272eab6a1772.png"
                  alt="Benkhalifa Parfum Logo"
                  className="h-16 w-16 object-cover rounded-full border-2 border-moroccan-gold shadow-lg"
                />
                <div className="flex flex-col">
                  <h4 className="text-2xl font-bold text-white">BENKHALIFA</h4>
                  <span className="text-moroccan-gold font-medium">Parfum</span>
                </div>
              </Link>
              <p className="text-white/80 leading-relaxed">
                Votre spécialiste en parfums orientaux authentiques. 
                Depuis 15 ans, nous perpétuons la tradition parfumière marocaine.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/mohcine.benkhalifa.92' },
                { Icon: Instagram, href: 'https://www.instagram.com/benkhalifa_mohcine/' },
                { Icon: Twitter, href: 'https://x.com/MOHCINEBEN817' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-moroccan-gold transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Liens Rapides</h4>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-white/80 hover:text-moroccan-gold transition-colors duration-200"
              >
                Accueil
              </Link>
              <Link
                to="/catalog"
                className="block text-white/80 hover:text-moroccan-gold transition-colors duration-200"
              >
                Catalogue
              </Link>
              <Link
                to="/our-story"
                className="block text-white/80 hover:text-moroccan-gold transition-colors duration-200"
              >
                Notre Histoire
              </Link>
              <Link
                to="/contact"
                className="block text-white/80 hover:text-moroccan-gold transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block text-white/80 hover:text-moroccan-gold transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className="block text-white/80 hover:text-moroccan-gold transition-colors duration-200"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Nos Parfums</h4>
            <nav className="space-y-3">
              {[
                { name: 'Musc', path: '/categories/musc' },
                { name: 'Oud', path: '/categories/oud' },
                { name: 'Ambre', path: '/categories/ambre' },
                { name: 'Rose', path: '/categories/rose' },
                { name: 'Jasmin', path: '/categories/jasmin' },
                { name: 'Santal', path: '/categories/santal' }
              ].map((category, index) => (
                <Link
                  key={index}
                  to={category.path}
                  className="block text-white/80 hover:text-moroccan-gold transition-colors duration-200"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-moroccan-gold mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <div>1 Rue Tata</div>
                  <div>Sidi Bennour, Maroc</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-moroccan-gold flex-shrink-0" />
                <div className="text-white/80">0653725806</div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-moroccan-gold flex-shrink-0" />
                <div className="text-white/80">mohcinebenkhalifa50@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              Benkhalifa Parfum
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/legal-notice" className="text-white/60 hover:text-moroccan-gold transition-colors">
                Mentions légales
              </Link>
              <Link to="/privacy-policy" className="text-white/60 hover:text-moroccan-gold transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms-of-sale" className="text-white/60 hover:text-moroccan-gold transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
