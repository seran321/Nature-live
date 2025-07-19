import React, { useState } from 'react';
import { X, ChevronRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';

interface ProductQuizProps {
  onClose: () => void;
  onResult: (product: any) => void;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; categories: string[]; }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 'concern',
    question: 'What is your primary wellness concern?',
    options: [
      { value: 'hair', label: 'Hair care and nourishment', categories: ['hair'] },
      { value: 'skin', label: 'Skin health and glow', categories: ['skin'] },
      { value: 'body', label: 'Body care and moisturizing', categories: ['body'] },
      { value: 'immunity', label: 'Immunity and overall health', categories: ['supplements'] },
    ]
  },
  {
    id: 'lifestyle',
    question: 'Which describes your lifestyle best?',
    options: [
      { value: 'active', label: 'Very active and outdoorsy', categories: ['body', 'supplements'] },
      { value: 'busy', label: 'Busy professional', categories: ['hair', 'skin'] },
      { value: 'wellness', label: 'Focused on natural wellness', categories: ['supplements', 'skin'] },
      { value: 'beauty', label: 'Beauty and self-care enthusiast', categories: ['hair', 'skin', 'body'] },
    ]
  },
  {
    id: 'preference',
    question: 'What type of product do you prefer?',
    options: [
      { value: 'oil', label: 'Natural oils and serums', categories: ['hair'] },
      { value: 'cream', label: 'Creams and moisturizers', categories: ['skin', 'body'] },
      { value: 'wash', label: 'Cleansers and washes', categories: ['hair', 'skin'] },
      { value: 'supplement', label: 'Internal supplements', categories: ['supplements'] },
    ]
  }
];

const ProductQuiz: React.FC<ProductQuizProps> = ({ onClose, onResult }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedProduct, setRecommendedProduct] = useState<any>(null);

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate recommendation
      const recommendation = calculateRecommendation(newAnswers);
      setRecommendedProduct(recommendation);
      setShowResult(true);
    }
  };

  const calculateRecommendation = (userAnswers: Record<string, string>) => {
    const categoryScores: Record<string, number> = {};
    
    // Score categories based on answers
    Object.entries(userAnswers).forEach(([questionId, answer]) => {
      const question = quizQuestions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.value === answer);
      
      option?.categories.forEach(category => {
        categoryScores[category] = (categoryScores[category] || 0) + 1;
      });
    });

    // Find the highest scoring category
    const topCategory = Object.entries(categoryScores)
      .sort(([,a], [,b]) => b - a)[0]?.[0];

    // Get a featured product from that category, or fallback to any product
    const categoryProducts = products.filter(p => p.category === topCategory);
    const featuredProducts = categoryProducts.filter(p => p.featured);
    
    return featuredProducts.length > 0 
      ? featuredProducts[Math.floor(Math.random() * featuredProducts.length)]
      : categoryProducts[Math.floor(Math.random() * categoryProducts.length)] || products[0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommendedProduct(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Product Recommendation Quiz</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!showResult ? (
          <div className="p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {quizQuestions[currentQuestion].question}
              </h3>
              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.value)}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 flex items-center justify-between group"
                  >
                    <span>{option.label}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {/* Result */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect Match Found!</h3>
              <p className="text-gray-600">Based on your answers, we recommend:</p>
            </div>

            {recommendedProduct && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold text-lg mb-2">{recommendedProduct.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{recommendedProduct.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${recommendedProduct.price}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(recommendedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({recommendedProduct.rating})</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  onResult(recommendedProduct);
                  onClose();
                }}
                className="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View Product
              </button>
              <button
                onClick={resetQuiz}
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductQuiz;