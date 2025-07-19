import React from 'react';
import { Leaf, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Nature Live</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Bringing you the finest natural herbal products for your wellness journey since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Nature Live, we believe that nature holds the key to wellness. Our mission is to provide
                you with the purest, most effective herbal products that support your health and beauty
                naturally.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to sustainable practices, ethical sourcing, and delivering products that
                you can trust. Every product we create is a testament to our dedication to your wellbeing
                and the health of our planet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Natural herbs and wellness products"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Purity</h3>
              <p className="text-gray-600">
                We use only the finest natural ingredients, free from harmful chemicals and additives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure the highest quality and effectiveness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Your wellness journey is our priority. We're here to support you every step of the way.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices that protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4465421/pexels-photo-4465421.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder working with herbs"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Founder's Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nature Live was founded by Dr. Sarah Green, a passionate herbalist with over 15 years of
                experience in natural medicine. Her journey began when she discovered the healing power
                of herbs during her own health struggles.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Inspired by ancient wisdom and modern science, Dr. Green dedicated her life to creating
                products that harness nature's healing potential. Today, Nature Live continues to grow
                under her vision of making natural wellness accessible to everyone.
              </p>
              <blockquote className="italic text-lg text-primary border-l-4 border-primary pl-4">
                "Nature has provided us with everything we need to heal and thrive. My mission is to
                help people reconnect with these natural gifts."
              </blockquote>
              <div className="mt-4 text-gray-600">- Dr. Sarah Green, Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sustainability & Ethics</h2>
            <p className="text-xl text-gray-600">Our commitment to the planet and its people</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We work directly with farmers and suppliers who share our values of fair trade and
                sustainable farming practices.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly Packaging</h3>
              <p className="text-gray-600">
                Our packaging is made from recycled and biodegradable materials, minimizing our
                environmental impact.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">
                We support local communities through fair wages and educational programs that promote
                sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;