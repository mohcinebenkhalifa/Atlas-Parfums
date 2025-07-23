
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "L'Art de la Parfumerie Orientale : Traditions et Modernité",
      excerpt: "Découvrez comment les parfumeurs marocains perpétuent des traditions millénaires tout en innovant pour créer des fragrances uniques.",
      author: "Sarah Benkhalifa",
      date: "15 Décembre 2024",
      category: "Tradition",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Guide Complet : Comment Choisir Votre Parfum Oriental",
      excerpt: "Des conseils d'experts pour sélectionner le parfum qui correspond parfaitement à votre personnalité et à vos préférences.",
      author: "Mohammed Alami",
      date: "10 Décembre 2024",
      category: "Guide",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Les Bienfaits du Musc : Entre Tradition et Science",
      excerpt: "Explorez les propriétés thérapeutiques et olfactives du musc, ingrédient phare de la parfumerie orientale.",
      author: "Dr. Amina Kadiri",
      date: "5 Décembre 2024",
      category: "Science",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Nouvelle Collection Automne : Inspirations du Désert",
      excerpt: "Plongez dans notre dernière collection inspirée des couleurs chaudes et des senteurs envoûtantes du Sahara.",
      author: "Équipe Benkhalifa",
      date: "1 Décembre 2024",
      category: "Nouveautés",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-moroccan-sand via-white to-moroccan-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-moroccan-burgundy mb-6">
            Blog Parfum
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'univers fascinant de la parfumerie orientale à travers nos articles, 
            guides et conseils d'experts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-moroccan-gold/20">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-moroccan-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-moroccan-burgundy group-hover:text-moroccan-gold transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-moroccan-gold group-hover:text-white group-hover:border-moroccan-gold transition-all"
                >
                  Lire l'article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-moroccan-burgundy to-moroccan-gold rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ne Manquez Aucun Article
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles 
            et conseils directement dans votre boîte mail.
          </p>
          <Button size="lg" className="bg-white text-moroccan-burgundy hover:bg-moroccan-cream">
            S'abonner à la Newsletter
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
