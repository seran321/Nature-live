import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Heart, Truck, Award, Star, ArrowDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Nature's Wellness for Your Life
              </h1>
              <p className="text-lg md:text-xl mb-6 text-white/90">
                Discover the power of natural herbal products crafted with care for your hair, skin, body, and overall wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="animate-slide-up relative">
              

              {/* Right Content - Product Showcase */}
          <div className="relative animate-slide-up p-20">
            <div className="relative">
              {/* Main Product Image Placeholder */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-10 animate-float">
                <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-32 bg-gradient-to-b from-accent to-primary rounded-lg mx-auto mb-4 shadow-lg"></div>
                    <p className="text-primary font-medium">Herbal Face Serum</p>
                    <p className="text-sm text-gray-600">Vitamin C + Rosehip</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🌿</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 " />
      </div>
      </div>
      </div>
    </section>

     
     

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Discover our most popular natural wellness products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Doctor Testimonials */}
      <section className="py-16 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Doctors Say</h2>
            <p className="text-xl text-gray-600">Trusted and recommended by healthcare professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Dr. Sarah Johnson"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "I recommend Nature Live's skincare products to my patients. The natural ingredients are gentle yet effective for sensitive skin conditions."
              </p>
              <h4 className="font-semibold">Dr. Sarah Johnson</h4>
              <p className="text-sm text-gray-500">Dermatologist, MD</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Dr. Michael Chen"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The herbal supplements from Nature Live are of exceptional quality. I've seen remarkable improvements in my patients' overall wellness."
              </p>
              <h4 className="font-semibold">Dr. Michael Chen</h4>
              <p className="text-sm text-gray-500">Naturopathic Doctor</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Dr. Emily Rodriguez"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Nature Live's hair care products have transformed my patients' hair health. The natural oils are particularly effective for hair restoration."
              </p>
              <h4 className="font-semibold">Dr. Emily Rodriguez</h4>
              <p className="text-sm text-gray-500">Trichologist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600">Trusted by industry standards and regulatory bodies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-sage rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">FDA Approved</h3>
              <p className="text-gray-600 text-sm">Meets safety standards</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-sage rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">USDA Organic</h3>
              <p className="text-gray-600 text-sm">Certified organic ingredients</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-sage rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cruelty Free</h3>
              <p className="text-gray-600 text-sm">No animal testing</p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-sage rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">GMP Certified</h3>
              <p className="text-gray-600 text-sm">Good manufacturing practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Explore our range of natural wellness products</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/categories/hair" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Hair Care"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Hair Care</h3>
                  <p className="text-gray-600">Oils, shampoos, and conditioners</p>
                </div>
              </div>
            </Link>
            
            <Link to="/categories/skin" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Skin Care"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Skin Care</h3>
                  <p className="text-gray-600">Face washes and creams</p>
                </div>
              </div>
            </Link>
            
            <Link to="/categories/body" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Body Care"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Body Care</h3>
                  <p className="text-gray-600">Sunscreens and moisturizers</p>
                </div>
              </div>
            </Link>
            
            <Link to="/categories/supplements" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/4465830/pexels-photo-4465830.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Supplements"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Supplements</h3>
                  <p className="text-gray-600">Herbal capsules and boosters</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Natural</h3>
              <p className="text-gray-600">Pure herbal ingredients sourced from nature</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorously tested for purity and effectiveness</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Wellness Focus</h3>
              <p className="text-gray-600">Designed for your holistic health journey</p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $50</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;