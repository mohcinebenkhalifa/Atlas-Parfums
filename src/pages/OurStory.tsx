import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Sparkles, Crown, Leaf, Heart, Star, Flower, Mountain, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="h-10 w-10 text-amber-600" />
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-amber-700 to-orange-800 bg-clip-text text-transparent">
              Histoire du Parfum au Maroc
            </h1>
            <Sparkles className="h-10 w-10 text-amber-600" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl text-amber-800 font-medium italic">
              "Un voyage olfactif à travers les siècles, où chaque essence raconte l'âme du Maroc"
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Depuis la nuit des temps, le Maroc cultive l'art subtil de la parfumerie. 
              Des jardins de roses de la vallée du Dadès aux forêts de cèdres de l'Atlas, 
              découvrez l'héritage millénaire qui fait du royaume chérifien un sanctuaire des senteurs.
            </p>
          </div>
        </div>

        {/* Introduction Poétique */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-12 shadow-lg">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-amber-800 mb-8">
                L'Essence d'une Civilisation
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Au Maroc, le parfum n'est pas qu'une fragrance ; c'est une langue universelle 
                    qui transcende les mots. Il accompagne les moments sacrés, berce les âmes 
                    et perpétue les traditions ancestrales transmises de mère en fille.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Dans les riads de Marrakech comme dans les médinas de Fès, l'air se charge 
                    d'essences précieuses : eau de rose, fleur d'oranger, encens mystique...
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Chaque région du royaume offre ses trésors olfactifs : les roses de Kelâa M'Gouna, 
                    le néroli de Salé, l'argan du Souss, créant une symphonie de senteurs 
                    unique au monde.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-medium text-amber-800">
                    "Le parfum marocain, c'est l'âme du Maghreb capturée dans un flacon."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Matières Premières */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">
              Les Trésors de la Terre Marocaine
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le Maroc recèle des matières premières d'exception, véritables joyaux de la parfumerie mondiale.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Flower className="h-6 w-6 text-rose-500" />
                    <h3 className="text-2xl font-bold text-amber-800">Rose de Damas</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Dans la vallée du Dadès, les roses de Damas s'épanouissent chaque printemps. 
                    Cueillies à l'aube pour préserver leur essence, elles donnent naissance à 
                    l'eau de rose la plus pure, symbole de féminité et de raffinement.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-6 w-6 text-orange-500" />
                    <h3 className="text-2xl font-bold text-amber-800">Néroli & Fleur d'Oranger</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Les orangeraies de Salé et de Rabat offrent leurs fleurs délicates pour créer 
                    le précieux néroli. Cette essence, symbole de pureté, parfume les mariages 
                    et les célébrations les plus importantes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mountain className="h-6 w-6 text-green-600" />
                    <h3 className="text-2xl font-bold text-amber-800">Cèdre de l'Atlas</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Majestueux gardien des montagnes, le cèdre de l'Atlas livre son bois précieux 
                    aux parfumeurs. Son essence boisée et noble évoque la force tranquille 
                    des sommets marocains.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Crown className="h-6 w-6 text-purple-600" />
                    <h3 className="text-2xl font-bold text-amber-800">Oud & Encens</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Héritage des routes commerciales ancestrales, l'oud et l'encens parfument 
                    les rituels spirituels. Ces essences mystiques créent une atmosphère 
                    de recueillement et d'élévation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <h3 className="text-2xl font-bold text-amber-800">Safran de Taliouine</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    L'or rouge du Maroc, cultivé sur les plateaux de Taliouine, apporte ses notes 
                    épicées et précieuses aux compositions les plus raffinées. Chaque pistil 
                    est un trésor cueilli à la main.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="h-6 w-6 text-amber-600" />
                    <h3 className="text-2xl font-bold text-amber-800">Huile d'Argan</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    L'arganier, arbre endémique du Souss, produit l'huile la plus précieuse. 
                    Utilisée depuis des siècles pour ses vertus cosmétiques, elle sublime 
                    la beauté naturelle des femmes berbères.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image des matières premières */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Fleurs et épices marocaines"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Les Jardins Parfumés du Maroc</h3>
              <p className="text-lg opacity-90">Où naissent les plus belles essences du monde</p>
            </div>
          </div>
        </section>

        {/* Rituels Traditionnels */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">
              Rituels et Traditions Parfumées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Au Maroc, le parfum accompagne chaque moment important de la vie.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Le Hammam Rituel</h3>
                <p className="text-gray-700 leading-relaxed">
                  Au hammam, l'eau de rose et la fleur d'oranger purifient le corps et l'esprit. 
                  Ce rituel ancestral de beauté utilise les essences naturelles pour régénérer 
                  et parfumer la peau.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Mariages & Célébrations</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lors des mariages, la mariée est parée d'essences précieuses : henné parfumé, 
                  eau de rose, encens. Chaque fragrance porte les vœux de bonheur et de prospérité 
                  de la famille.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Soins Capillaires</h3>
                <p className="text-gray-700 leading-relaxed">
                  L'huile d'argan parfumée aux essences florales nourrit et sublime la chevelure. 
                  Ce secret de beauté berbère se transmet de génération en génération depuis 
                  des siècles.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Hammam traditionnel marocain"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div>
            <div className="absolute bottom-8 right-8 text-white text-right">
              <h3 className="text-2xl font-bold mb-2">L'Art du Bien-Être</h3>
              <p className="text-lg opacity-90">Rituels ancestraux de beauté et de purification</p>
            </div>
          </div>
        </section>

        {/* Influence Arabo-Andalouse */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-600" />
                <h2 className="text-4xl font-bold text-amber-800">
                  L'Héritage Arabo-Andalou
                </h2>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                L'art de la parfumerie marocaine s'enrichit des influences d'Al-Andalus, 
                créant un style unique au monde.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">
                    Techniques de Distillation
                  </h3>
                  <p className="text-gray-700">
                    Les maîtres parfumeurs d'Al-Andalus ont apporté leurs techniques de distillation 
                    raffinées, permettant d'extraire les essences les plus pures des fleurs et des plantes.
                  </p>
                </div>
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">
                    Compositions Sophistiquées
                  </h3>
                  <p className="text-gray-700">
                    L'influence andalouse apporte la sophistication des accords complexes, 
                    mêlant notes florales, épicées et boisées dans des harmonies sublimes.
                  </p>
                </div>
                <div className="border-l-4 border-amber-400 pl-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">
                    Jardins Parfumés
                  </h3>
                  <p className="text-gray-700">
                    Les jardins à l'andalouse, avec leurs bassins et leurs plantations organisées, 
                    deviennent des laboratoires naturels pour la culture des plantes aromatiques.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Architecture andalouse marocaine"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </section>

        {/* Essor Moderne */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-amber-800 to-orange-800 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold mb-6">
                Renaissance de la Parfumerie Marocaine
              </h2>
              <p className="text-xl leading-relaxed mb-8">
                Au XXIe siècle, la parfumerie marocaine connaît un renouveau spectaculaire, 
                alliant tradition millénaire et innovation moderne.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-amber-200">Marques Émergentes</h3>
                  <ul className="space-y-2 text-amber-100">
                    <li>• Résurgence des maisons familiales traditionnelles</li>
                    <li>• Création de marques premium contemporaines</li>
                    <li>• Collaboration avec des parfumeurs internationaux</li>
                    <li>• Valorisation du patrimoine olfactif marocain</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-amber-200">Innovation & Qualité</h3>
                  <ul className="space-y-2 text-amber-100">
                    <li>• Certification bio et développement durable</li>
                    <li>• Techniques d'extraction moderne</li>
                    <li>• Packaging de luxe respectueux</li>
                    <li>• Reconnaissance internationale</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-amber-600">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-200 mb-2">800+</div>
                  <div className="text-amber-100">Années de Tradition</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-200 mb-2">50+</div>
                  <div className="text-amber-100">Essences Naturelles</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-200 mb-2">100+</div>
                  <div className="text-amber-100">Artisans Parfumeurs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion Historique */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 border-2 border-amber-200">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Crown className="h-10 w-10 text-amber-600" />
                <h2 className="text-4xl font-bold text-amber-800">
                  Un Héritage Vivant
                </h2>
                <Crown className="h-10 w-10 text-amber-600" />
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Aujourd'hui, la parfumerie marocaine continue d'écrire son histoire, portée par 
                une nouvelle génération d'artisans qui honorent la tradition tout en embrassant 
                l'innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Des ateliers familiaux de Fès aux laboratoires modernes de Casablanca, 
                    le savoir-faire ancestral se transmet, s'enrichit et se réinvente pour 
                    séduire les amateurs du monde entier.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Chaque flacon raconte une histoire millénaire, chaque fragrance porte 
                    en elle l'âme du Maroc et la promesse d'un voyage sensoriel unique 
                    au cœur de cette culture raffinée.
                  </p>
                </div>
              </div>
              
              <div className="pt-8 border-t border-amber-200">
                <p className="text-2xl font-bold text-amber-800 italic">
                  "L'histoire du parfum marocain continue de s'écrire, entre tradition et modernité."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
