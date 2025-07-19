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
    id: '4',
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
    id: '5',
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
    id: '6',
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
  }
];