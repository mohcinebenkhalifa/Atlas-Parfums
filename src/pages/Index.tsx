import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import CustomerReviews from '@/components/CustomerReviews';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Images pour le carousel - collections de parfums orientaux
  const carouselImages = [
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Bouteilles de parfum élégantes
    'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Parfums ambrés et dorés
    'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Collection de parfums de luxe
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Parfums orientaux avec roses
    'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Parfums traditionnels orientaux
    'https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Bouteilles de parfum avec fleurs
  ];

  useEffect(() => {
    // SEO Meta tags
    document.title = 'Ben Khalifa Parfum - Parfums de Luxe au Maroc | Oriental & Occidental';
    
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateMetaTag('description', 'Découvrez notre collection exclusive de parfums de luxe au Maroc. Parfums orientaux, occidentaux, oud, musc et collections limitées. Livraison gratuite à partir de 500 MAD.');
    updateMetaTag('keywords', 'parfum maroc, parfum oriental, parfum occidental, oud, musc, parfum luxe, ben khalifa parfum');
    updateMetaTag('author', 'Ben Khalifa Parfum');
    updateMetaTag('og:title', 'Ben Khalifa Parfum - Parfums de Luxe au Maroc', true);
    updateMetaTag('og:description', 'Collection exclusive de parfums orientaux et occidentaux de luxe. Découvrez nos fragrances uniques.', true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', 'https://www.benkhalifaparfum.ma', true);
    updateMetaTag('og:image', '/placeholder.svg', true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Ben Khalifa Parfum - Parfums de Luxe');
    updateMetaTag('twitter:description', 'Collection exclusive de parfums orientaux et occidentaux de luxe.');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.benkhalifaparfum.ma');

    // Trigger entrance animations after component mounts
    setIsLoaded(true);
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="animate-slide-down">
        <Header />
      </div>
      
      <div className="animate-fade-in-up delay-300">
        <Hero />
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-800">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Collections en Images</h2>
            <ImageCarousel images={carouselImages} />
          </div>
        </section>
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-800">
        <FeaturedProducts />
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-800">
        <WhyChooseUs />
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-800">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <CustomerReviews showAddReview={true} />
          </div>
        </section>
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-800">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
