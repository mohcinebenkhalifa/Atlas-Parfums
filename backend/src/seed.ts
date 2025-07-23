import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Product } from './models/product.model';

dotenv.config({ path: __dirname + '/../.env' });

const catalogProducts = [
  // 👩‍🦰 Parfums pour Femmes - 🌸 Floraux
  {
    name: "Coco Mademoiselle",
    brand: "Chanel",
    description: "Un parfum oriental-frais, moderne et audacieux. Une composition unique autour de la rose et du jasmin.",
    price: 1250,
    category: 'femme_luxe',
    collection_name: "Floraux Femmes",
    size_ml: 50,
    concentration: "Eau de Parfum",
    stock_quantity: 15,
    is_active: true,
    is_featured: true,
    target_gender: "Femme",
    age_group: "Adulte",
    notes_top: ["Orange", "Mandarine", "Bergamote"],
    notes_heart: ["Rose", "Jasmin", "Litchi"],
    notes_base: ["Patchouli", "Vanille", "Musc blanc"],
    image_url: null,
    images: null,
    launch_year: 2001,
    original_price: null,
    category_id: null
  },
  {
    name: "J'adore",
    brand: "Dior",
    description: "L'or en flacon. Un bouquet floral solaire et voluptueux, incarnation du savoir-faire Dior.",
    price: 1180,
    category: 'femme_luxe',
    collection_name: "Floraux Femmes",
    size_ml: 50,
    concentration: "Eau de Parfum",
    stock_quantity: 20,
    is_active: true,
    is_featured: true,
    target_gender: "Femme",
    age_group: "Adulte",
    notes_top: ["Magnolia", "Pêche", "Poire"],
    notes_heart: ["Freesia", "Rose", "Violette"],
    notes_base: ["Musc", "Bois", "Blackberry"],
    image_url: null,
    images: null,
    launch_year: 1999,
    original_price: null,
    category_id: null
  },
  {
    name: "La Vie Est Belle",
    brand: "Lancôme",
    description: "Un parfum gourmand unique qui exprime un nouveau art de vivre avec bonheur.",
    price: 950,
    category: 'femme_moderne',
    collection_name: "Floraux Femmes",
    size_ml: 50,
    concentration: "Eau de Parfum",
    stock_quantity: 25,
    is_active: true,
    is_featured: false,
    target_gender: "Femme",
    age_group: "Adulte",
    notes_top: ["Cassis", "Poire"],
    notes_heart: ["Iris", "Jasmin", "Fleur d'oranger"],
    notes_base: ["Praline", "Vanille", "Patchouli"],
    image_url: null,
    images: null,
    launch_year: 2012,
    original_price: null,
    category_id: null
  },
  {
    name: "Bloom",
    brand: "Gucci",
    description: "Un jardin blanc riche et capiteux pour célébrer l'authenticité, la vitalité et la diversité des femmes.",
    price: 1100,
    category: 'femme_moderne',
    collection_name: "Floraux Femmes",
    size_ml: 50,
    concentration: "Eau de Parfum",
    stock_quantity: 18,
    is_active: true,
    is_featured: false,
    target_gender: "Femme",
    age_group: "Adulte",
    notes_top: ["Néroli", "Bergamote"],
    notes_heart: ["Jasmin", "Tubéreuse"],
    notes_base: ["Musc blanc", "Santal"],
    image_url: null,
    images: null,
    launch_year: 2017,
    original_price: null,
    category_id: null
  },
  {
    name: "Libre",
    brand: "Yves Saint Laurent",
    description: "La fragrance de la femme libre. Une tension entre la lavande de France et la fleur d'oranger du Maroc.",
    price: 1080,
    category: 'femme_moderne',
    collection_name: "Floraux Femmes",
    size_ml: 50,
    concentration: "Eau de Parfum",
    stock_quantity: 22,
    is_active: true,
    is_featured: false,
    target_gender: "Femme",
    age_group: "Adulte",
    notes_top: ["Mandarine", "Cassis", "Lavande"],
    notes_heart: ["Jasmin", "Fleur d'oranger"],
    notes_base: ["Musc", "Vanille", "Ambre gris"],
    image_url: null,
    images: null,
    launch_year: 2019,
    original_price: null,
    category_id: null
  },

  // 👩‍🦰 Parfums pour Femmes - 🍊 Fruités
  {
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    description: "L'essence de la joie de vivre méditerranéenne dans un flacon. Frais et spontané.",
    price: 850,
    category: 'femme_moderne',
    collection_name: "Fruités Femmes",
    size_ml: 50,
    concentration: "Eau de Toilette",
    stock_quantity: 30,
    is_active: true,
    is_featured: false,
    target_gender: "Femme",
    age_group: "Adulte",
    notes_top: ["Citron", "Pomme", "Clochette des neiges"],
    notes_heart: ["Bambou", "Jasmin", "Rose"],
    notes_base: ["Cèdre", "Ambre", "Musc"],
    image_url: null,
    images: null,
    launch_year: 2001,
    original_price: null,
    category_id: null
  },
  {
    name: "Nina",
    brand: "Nina Ricci",
    description: "Un parfum gourmand et séducteur dans son iconique flacon pomme rouge.",
    price: 750,
    category: 'femme_jeune',
    collection_name: "Fruités Femmes",
    size_ml: 50,
    concentration: "Eau de Toilette",
    stock_quantity: 35,
    is_active: true,
    is_featured: false,
    target_gender: "Femme",
    age_group: "Jeune",
    notes_top: ["Citron", "Lime", "Mandarine"],
    notes_heart: ["Pomme", "Pivoine", "Glaïeul"],
    notes_base: ["Pomme", "Musc", "Bois"],
    image_url: null,
    images: null,
    launch_year: 2006,
    original_price: null,
    category_id: null
  },

  // 👨‍🦱 Parfums pour Hommes - 🌲 Boisés
  {
    name: "Sauvage",
    brand: "Dior",
    description: "Sauvage est un acte de création inspiré par les grands espaces. Un parfum à la fraîcheur brutale.",
    price: 1150,
    category: 'homme_moderne',
    collection_name: "Boisés Hommes",
    size_ml: 60,
    concentration: "Eau de Parfum",
    stock_quantity: 25,
    is_active: true,
    is_featured: true,
    target_gender: "Homme",
    age_group: "Adulte",
    notes_top: ["Bergamote", "Poivre"],
    notes_heart: ["Géranium", "Lavande", "Elemi"],
    notes_base: ["Ambroxan", "Cèdre", "Labdanum"],
    image_url: null,
    images: null,
    launch_year: 2015,
    original_price: null,
    category_id: null
  },
  {
    name: "Terre d'Hermès",
    brand: "Hermès",
    description: "Un parfum qui raconte la relation entre l'homme et la terre, son dialogue humble et harmonieux avec les éléments.",
    price: 1200,
    category: 'homme_classique',
    collection_name: "Boisés Hommes",
    size_ml: 50,
    concentration: "Eau de Parfum",
    stock_quantity: 20,
    is_active: true,
    is_featured: true,
    target_gender: "Homme",
    age_group: "Adulte",
    notes_top: ["Orange", "Pamplemousse"],
    notes_heart: ["Poivre", "Pélargonium", "Silex"],
    notes_base: ["Vétiver", "Cèdre", "Benzoin"],
    image_url: null,
    images: null,
    launch_year: 2006,
    original_price: null,
    category_id: null
  },
  {
    name: "Bleu de Chanel",
    brand: "Chanel",
    description: "Un parfum boisé-aromatique intemporel et inattendu qui révèle la personnalité de celui qui le porte.",
    price: 1180,
    category: 'homme_luxe',
    collection_name: "Boisés Hommes",
    size_ml: 50,
    concentration: "Eau de Parfum",
    stock_quantity: 18,
    is_active: true,
    is_featured: false,
    target_gender: "Homme",
    age_group: "Adulte",
    notes_top: ["Citron", "Bergamote", "Menthe"],
    notes_heart: ["Gingembre", "Noix de muscade", "Jasmin"],
    notes_base: ["Bois de cèdre", "Santal", "Musc blanc"],
    image_url: null,
    images: null,
    launch_year: 2010,
    original_price: null,
    category_id: null
  },

  // 🧑‍🤝‍🧑 Parfums Unisexes
  {
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    description: "Une fragrance lumineuse et aérienne, un jeu de contraste entre l'éclat et la sensualité.",
    price: 2800,
    category: 'unisexe_adulte',
    collection_name: "Parfums Unisexes",
    size_ml: 70,
    concentration: "Eau de Parfum",
    stock_quantity: 10,
    is_active: true,
    is_featured: true,
    target_gender: "Unisexe",
    age_group: "Adulte",
    notes_top: ["Safran", "Jasmin"],
    notes_heart: ["Ambre gris", "Cèdre"],
    notes_base: ["Résine de sapin", "Musc"],
    image_url: null,
    images: null,
    launch_year: 2015,
    original_price: null,
    category_id: null
  }
];

const MONGODB_URI = process.env.MONGODB_URI;

const seedDB = async () => {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in .env file');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected for seeding');

    await Product.deleteMany({});
    console.log('Products deleted');

    await Product.insertMany(catalogProducts);
    console.log('Products seeded');

  } catch (err) {
    console.error('MongoDB connection error:', err);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
};

seedDB(); 