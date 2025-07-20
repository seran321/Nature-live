import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'hair',
    name: 'Hair',
    subCategories: ['Oil', 'Shampoo', 'Conditioner'],
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 'skin',
    name: 'Skin',
    subCategories: ['Face Wash', 'Cream'],
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 'body',
    name: 'Body',
    subCategories: ['Sunscreen', 'Lotion', 'Moisturizer'],
    image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: 'supplements',
    name: 'Supplements',
    subCategories: ['Herbal Capsules', 'Immunity Boosters'],
    image: 'https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

export const products: Product[] = [
  // Hair Category
  {
    id: '1',
    name: 'Argan Hair Oil',
    description: 'Pure organic argan oil for nourishing and strengthening hair',
    price: 24.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'hair',
    subCategory: 'Oil',
    rating: 4.8,
    benefits: ['Nourishes hair', 'Reduces frizz', 'Adds shine', 'Strengthens hair follicles'],
    usage: 'Apply 2-3 drops to damp hair, focusing on ends. Use daily.',
    featured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Herbal Shampoo',
    description: 'Gentle cleansing shampoo with natural herbs and botanicals',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4465421/pexels-photo-4465421.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'hair',
    subCategory: 'Shampoo',
    rating: 4.6,
    benefits: ['Gentle cleansing', 'Sulfate-free', 'Natural ingredients', 'Suitable for all hair types'],
    usage: 'Apply to wet hair, massage gently, and rinse thoroughly.',
    featured: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Hibiscus Hair Conditioner',
    description: 'Natural conditioner with hibiscus and aloe for soft and shiny hair',
    price: 19.99,
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'hair',
    subCategory: 'Conditioner',
    rating: 4.5,
    benefits: ['Softens hair', 'Adds shine', 'Reduces breakage'],
    usage: 'Apply to wet hair after shampooing. Leave for 2–3 minutes, then rinse.',
    featured: false,
    inStock: true
  },
  {
    id: '4',
    name: 'Neem Hair Oil',
    description: 'Antibacterial neem oil for healthy scalp and dandruff control',
    price: 21.50,
    image: 'https://images.pexels.com/photos/16159991/pexels-photo-16159991/free-photo-of-essential-oil-in-a-bottle.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'hair',
    subCategory: 'Oil',
    rating: 4.4,
    benefits: ['Fights dandruff', 'Antibacterial', 'Improves scalp health'],
    usage: 'Massage onto scalp twice a week before washing.',
    featured: false,
    inStock: true
  },
  {
    id: '5',
    name: 'Amla & Shikakai Shampoo',
    description: 'Traditional herbal shampoo for strong, shiny hair',
    price: 17.99,
    image: 'https://images.pexels.com/photos/9732453/pexels-photo-9732453.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'hair',
    subCategory: 'Shampoo',
    rating: 4.7,
    benefits: ['Strengthens roots', 'Reduces hair fall', 'Cleans naturally'],
    usage: 'Apply to wet hair, massage, and rinse well.',
    featured: true,
    inStock: true
  },

  // Skin Category
  {
    id: '6',
    name: 'Aloe Vera Face Wash',
    description: 'Soothing face wash with pure aloe vera and natural extracts',
    price: 16.99,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'skin',
    subCategory: 'Face Wash',
    rating: 4.7,
    benefits: ['Gentle cleansing', 'Hydrating', 'Soothes irritation', 'Natural ingredients'],
    usage: 'Apply to wet face, massage gently, and rinse with lukewarm water.',
    featured: true,
    inStock: true
  },
  {
    id: '7',
    name: 'Turmeric Face Cream',
    description: 'Anti-aging cream with turmeric and natural botanicals',
    price: 32.99,
    image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'skin',
    subCategory: 'Cream',
    rating: 4.9,
    benefits: ['Anti-aging', 'Brightens skin', 'Reduces inflammation', 'Natural glow'],
    usage: 'Apply morning and evening to clean skin. Gently massage until absorbed.',
    featured: true,
    inStock: true
  },
  {
    id: '8',
    name: 'Charcoal Face Wash',
    description: 'Deep-cleansing charcoal wash for oily and acne-prone skin',
    price: 14.50,
    image: 'https://images.pexels.com/photos/6984662/pexels-photo-6984662.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'skin',
    subCategory: 'Face Wash',
    rating: 4.4,
    benefits: ['Removes impurities', 'Unclogs pores', 'Controls oil'],
    usage: 'Use twice daily on wet face. Rinse thoroughly.',
    featured: false,
    inStock: true
  },
  {
    id: '9',
    name: 'Saffron Glow Cream',
    description: 'Herbal cream enriched with saffron and sandalwood for a radiant look',
    price: 29.99,
    image: 'https://images.pexels.com/photos/2888358/pexels-photo-2888358.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'skin',
    subCategory: 'Cream',
    rating: 4.6,
    benefits: ['Improves complexion', 'Natural glow', 'Moisturizes skin'],
    usage: 'Apply morning and night on clean skin.',
    featured: false,
    inStock: true
  },
  {
    id: '10',
    name: 'Rose Face Wash',
    description: 'Refreshing rose-based cleanser for soft and supple skin',
    price: 15.75,
    image: 'https://images.pexels.com/photos/6621466/pexels-photo-6621466.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'skin',
    subCategory: 'Face Wash',
    rating: 4.5,
    benefits: ['Hydrates', 'Softens skin', 'Natural rose scent'],
    usage: 'Use daily. Lather and rinse well.',
    featured: false,
    inStock: true
  },

  // Body Category
  {
    id: '11',
    name: 'Coconut Body Lotion',
    description: 'Moisturizing body lotion with organic coconut oil',
    price: 22.99,
    image: 'https://images.pexels.com/photos/4465580/pexels-photo-4465580.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'body',
    subCategory: 'Lotion',
    rating: 4.5,
    benefits: ['Deep moisturizing', 'Long-lasting hydration', 'Natural fragrance', 'Smooth skin'],
    usage: 'Apply generously to clean skin, massage until absorbed.',
    featured: false,
    inStock: true
  },
  {
    id: '12',
    name: 'Herbal Sunscreen SPF 30',
    description: 'Natural sun protection with aloe and green tea',
    price: 20.99,
    image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'body',
    subCategory: 'Sunscreen',
    rating: 4.4,
    benefits: ['Protects from UV rays', 'Non-greasy', 'Natural ingredients'],
    usage: 'Apply 15 minutes before sun exposure. Reapply as needed.',
    featured: true,
    inStock: true
  },
  {
    id: '13',
    name: 'Shea Butter Moisturizer',
    description: 'Ultra-rich moisturizer for dry and flaky skin',
    price: 25.49,
    image: 'https://images.pexels.com/photos/6621470/pexels-photo-6621470.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'body',
    subCategory: 'Moisturizer',
    rating: 4.8,
    benefits: ['Deep hydration', 'Smooths rough patches', 'Heals cracked skin'],
    usage: 'Use daily after shower or as needed.',
    featured: true,
    inStock: true
  },
  {
    id: '14',
    name: 'Lavender Body Lotion',
    description: 'Relaxing body lotion infused with lavender oil',
    price: 21.00,
    image: 'https://images.pexels.com/photos/6621481/pexels-photo-6621481.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'body',
    subCategory: 'Lotion',
    rating: 4.3,
    benefits: ['Relaxes body', 'Calms skin', 'Mild fragrance'],
    usage: 'Apply before bedtime for best results.',
    featured: false,
    inStock: true
  },
  {
    id: '15',
    name: 'Herbal Sunscreen SPF 50',
    description: 'High-protection natural sunscreen for intense sun exposure',
    price: 23.99,
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'body',
    subCategory: 'Sunscreen',
    rating: 4.6,
    benefits: ['Water-resistant', 'Broad-spectrum SPF', 'Botanical extracts'],
    usage: 'Apply generously and reapply every 2 hours.',
    featured: false,
    inStock: true
  },

  // Supplements Category
  {
    id: '16',
    name: 'Herbal Immunity Booster',
    description: 'Natural supplement blend to support immune system',
    price: 28.99,
    image: 'https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'supplements',
    subCategory: 'Immunity Boosters',
    rating: 4.8,
    benefits: ['Boosts immunity', 'Natural ingredients', 'Energy support', 'Antioxidant rich'],
    usage: 'Take 1-2 capsules daily with meals.',
    featured: true,
    inStock: true
  },
  {
    id: '17',
    name: 'Ashwagandha Capsules',
    description: 'Stress relief and energy support with organic ashwagandha',
    price: 26.50,
    image: 'https://images.pexels.com/photos/10502894/pexels-photo-10502894.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'supplements',
    subCategory: 'Herbal Capsules',
    rating: 4.9,
    benefits: ['Reduces stress', 'Boosts energy', 'Enhances focus'],
    usage: 'Take 1 capsule in morning and evening with water.',
    featured: true,
    inStock: true
  },
  {
    id: '18',
    name: 'Moringa Capsules',
    description: 'Rich in antioxidants and nutrients for overall wellness',
    price: 24.00,
    image: 'https://images.pexels.com/photos/11150443/pexels-photo-11150443.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'supplements',
    subCategory: 'Herbal Capsules',
    rating: 4.7,
    benefits: ['Energy support', 'Anti-inflammatory', 'Supports digestion'],
    usage: 'Take 1-2 capsules daily with meals.',
    featured: false,
    inStock: true
  },
  {
    id: '19',
    name: 'Herbal Digestive Tonic',
    description: 'Natural formula to aid digestion and gut health',
    price: 19.99,
    image: 'https://images.pexels.com/photos/6214471/pexels-photo-6214471.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'supplements',
    subCategory: 'Immunity Boosters',
    rating: 4.5,
    benefits: ['Improves digestion', 'Relieves bloating', 'Supports metabolism'],
    usage: 'Take 10 ml twice a day after meals.',
    featured: false,
    inStock: true
  },
  {
    id: '20',
    name: 'Triphala Capsules',
    description: 'Traditional Ayurvedic remedy for detox and digestion',
    price: 21.50,
    image: 'https://images.pexels.com/photos/16657457/pexels-photo-16657457.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'supplements',
    subCategory: 'Herbal Capsules',
    rating: 4.6,
    benefits: ['Supports detox', 'Improves bowel movement', 'Antioxidant'],
    usage: 'Take 1 capsule before bedtime.',
    featured: false,
    inStock: true
  }
];
