
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleDiscoverPerfumes = () => {
    navigate('/catalog');
  };

  const handleOurStory = () => {
    navigate('/our-story');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-moroccan-gold/10 via-moroccan-amber/5 to-moroccan-terracotta/10 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://cdn.pixabay.com/video/2019/08/03/25373-351094830_large.mp4" type="video/mp4" />
          {/* Fallback gradient if video doesn't load */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-moroccan-burgundy/30 via-transparent to-moroccan-gold/20"></div>
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-40 animate-pulse"></div>
      
      {/* Enhanced Decorative Elements with more animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-moroccan-gold/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-moroccan-amber/25 rounded-full blur-lg animate-float delay-500"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-moroccan-amber/20 rounded-full blur-xl animate-float delay-1000"></div>
      <div className="absolute bottom-20 left-32 w-24 h-24 bg-moroccan-terracotta/20 rounded-full blur-lg animate-float delay-1500"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-moroccan-gold rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-moroccan-amber rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-moroccan-terracotta rounded-full animate-ping delay-1200"></div>
      
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content with enhanced animations */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-moroccan-terracotta animate-slide-in-left">
                <Sparkles className="h-5 w-5 animate-spin-slow" />
                <span className="text-sm font-medium">Authentiques Parfums Orientaux</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-moroccan-burgundy leading-tight animate-scale-in">
                Découvrez les
                <span className="block bg-gradient-to-r from-moroccan-gold to-moroccan-amber bg-clip-text text-transparent animate-gradient">
                  Trésors Olfactifs
                </span>
                du Maroc
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl animate-fade-in delay-300">
                Plongez dans l'univers envoûtant des parfums marocains traditionnels. 
                Musc, oud, ambre et jasmin vous transportent vers les souks ancestraux 
                de Marrakech et Fès.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-500">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-moroccan-gold to-moroccan-amber hover:from-moroccan-gold-dark hover:to-moroccan-amber-dark text-white font-semibold shadow-lg group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={handleDiscoverPerfumes}
              >
                Découvrir nos parfums
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-moroccan-gold text-moroccan-burgundy hover:bg-moroccan-gold/10 transform transition-all duration-300 hover:scale-105"
                onClick={handleOurStory}
              >
                Notre histoire
              </Button>
            </div>

            {/* Stats with enhanced animations */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in delay-700">
              {[
                { number: '50+', label: 'Parfums Authentiques' },
                { number: '1000+', label: 'Clients Satisfaits' },
                { number: '15', label: 'Années d\'Expérience' }
              ].map((stat, index) => (
                <div key={index} className="text-center transform transition-all duration-300 hover:scale-110">
                  <div className="text-2xl font-bold text-moroccan-gold animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image with enhanced effects */}
          <div className="relative animate-scale-in delay-300">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              <img
                src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Parfums orientaux marocains"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moroccan-burgundy/20 via-transparent to-moroccan-gold/10"></div>
              
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full animate-shimmer"></div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
              <div className="w-16 h-16 bg-gradient-to-br from-moroccan-gold to-moroccan-amber rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="h-8 w-8 text-white animate-spin" />
              </div>
            </div>
            
            {/* Additional floating elements */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-moroccan-terracotta/20 rounded-full blur-sm animate-float delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-moroccan-amber/30 rounded-full blur-md animate-float delay-500"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-moroccan-gold rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-moroccan-gold rounded-full mt-2 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-moroccan-gold/20 to-transparent animate-shimmer-vertical"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
