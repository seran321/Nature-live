import React, { useState } from 'react';
import { Search, X, ChevronDown, ChevronUp } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductQuiz from '../components/ProductQuiz';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['all']);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSubCategory = selectedSubCategory === 'all' || product.subCategory === selectedSubCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesSubCategory && matchesPrice;
  });

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const subCategories = selectedCategoryData?.subCategories || [];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleQuizResult = (recommendedProduct: any) => {
    setShowQuiz(false);
    // Scroll to the recommended product or show it prominently
    const element = document.getElementById(`product-${recommendedProduct.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        {/* Left Sidebar - Filters */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            
            {/* Quiz Button */}
            <button
              onClick={() => setShowQuiz(true)}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg mb-6 hover:bg-primary/90 transition-colors"
            >
              Take Product Quiz
            </button>
            
            {/* Categories */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubCategory('all');
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all' ? 'bg-primary text-white' : 'hover:bg-gray-100'
                }`}
              >
                All Products
              </button>
              
              {categories.map(category => (
                <div key={category.id}>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium">{category.name}</span>
                    {expandedCategories.includes(category.id) ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </button>
                  
                  {expandedCategories.includes(category.id) && (
                    <div className="ml-4 mt-2 space-y-1">
                      <button
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSelectedSubCategory('all');
                        }}
                        className={`w-full text-left px-3 py-1 rounded text-sm transition-colors ${
                          selectedCategory === category.id && selectedSubCategory === 'all' 
                            ? 'bg-primary/10 text-primary' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        All {category.name}
                      </button>
                      {category.subCategories.map(subCategory => (
                        <button
                          key={subCategory}
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setSelectedSubCategory(subCategory);
                          }}
                          className={`w-full text-left px-3 py-1 rounded text-sm transition-colors ${
                            selectedCategory === category.id && selectedSubCategory === subCategory 
                              ? 'bg-primary/10 text-primary' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {subCategory}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubCategory('all');
                setSearchTerm('');
                setPriceRange([0, 100]);
              }}
              className="w-full mt-6 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear All Filters
            </button>
            
            {/* Price Filter */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold mb-4">Price Range</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600 ">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <div className="relative pb-5">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb "
                    style={{ opacity: 0, pointerEvents: "none" }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb "
                  />
                </div>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded  "
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100])}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                    placeholder="Max"
                  />
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setPriceRange([0, 25])}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      priceRange[0] === 0 && priceRange[1] === 25 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    Under $25
                  </button>
                  <button
                    onClick={() => setPriceRange([25, 50])}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      priceRange[0] === 25 && priceRange[1] === 50 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    $25 - $50
                  </button>
                  <button
                    onClick={() => setPriceRange([50, 100])}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      priceRange[0] === 50 && priceRange[1] === 100 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    $50 - $100
                  </button>
                  <button
                    onClick={() => setPriceRange([0, 100])}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      priceRange[0] === 0 && priceRange[1] === 100 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    All Prices
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Products</h1>
          <p className="text-xl text-gray-600">Discover our complete range of natural wellness products</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowQuiz(true)}
              className="lg:hidden bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Take Quiz
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} id={`product-${product.id}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4">
              <Search className="h-12 w-12 text-gray-400 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
        </div>
      </div>
      
      {/* Quiz Modal */}
      {showQuiz && (
        <ProductQuiz 
          onClose={() => setShowQuiz(false)} 
          onResult={handleQuizResult}
        />
      )}
    </div>
  );
};

export default Products;