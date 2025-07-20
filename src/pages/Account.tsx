import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Package, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';

const Account: React.FC = () => {
  const { user, logout } = useAuth();
  const { getUserOrders } = useOrders();
  const [activeTab, setActiveTab] = useState('profile');

  const userOrders = getUserOrders();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Account</h1>
          <p className="text-gray-600">Manage your account and orders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{user?.name}</h3>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'profile' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'orders' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  <span>Orders</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        defaultValue={user?.name?.split(' ')[0] || ''}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        defaultValue={user?.name?.split(' ')[1] || ''}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue={user?.email || ''}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      id="address"
                      rows={3}
                      placeholder="123 Main St, City, State 12345"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Order History</h2>
                
                {userOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
                    <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
                    <Link
                      to="/products"
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {userOrders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">Order {order.id}</h3>
                            <p className="text-gray-600">Placed on {order.createdAt.toLocaleDateString()}</p>
                            {order.trackingNumber && (
                              <p className="text-sm text-gray-500">Tracking: {order.trackingNumber}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">${order.total.toFixed(2)}</p>
                            <span className={`px-3 py-1 rounded-full text-sm capitalize ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                              order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span>{item.product.name} x{item.quantity}</span>
                              <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="border-t pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Shipping Address</h4>
                              <p>{order.shippingAddress.street}</p>
                              <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                              <p>{order.shippingAddress.country}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Payment Method</h4>
                              <p className="text-sm">{order.paymentMethod}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Email Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        <span>Order confirmations</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                        <span>Shipping updates</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Promotional emails</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Password</h3>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      Change Password
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Account Actions</h3>
                    <div className="space-y-3">
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;