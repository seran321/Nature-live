import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Mail } from 'lucide-react';

const OrderSuccess: React.FC = () => {
  const orderNumber = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your purchase</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Package className="h-5 w-5 text-primary" />
            <span className="font-semibold">Order Number</span>
          </div>
          <p className="text-lg font-mono text-primary">{orderNumber}</p>
        </div>
        
        <div className="text-left space-y-4 mb-6">
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold">Confirmation Email</h3>
              <p className="text-sm text-gray-600">
                We've sent a confirmation email with your order details and tracking information.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Package className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-semibold">Shipping Updates</h3>
              <p className="text-sm text-gray-600">
                You'll receive updates about your order status and tracking information.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Link
            to="/account"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Track Your Order</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <Link
            to="/products"
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;