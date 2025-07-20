import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Order, CartItem, Address } from '../types';
import { useAuth } from './AuthContext';

interface OrderContextType {
  orders: Order[];
  createOrder: (items: CartItem[], total: number, shippingAddress: Address, paymentMethod: string) => Promise<string>;
  getOrderById: (orderId: string) => Order | undefined;
  getUserOrders: () => Order[];
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const { user } = useAuth();

  // Load orders from localStorage on mount
  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      const parsedOrders = JSON.parse(storedOrders).map((order: any) => ({
        ...order,
        createdAt: new Date(order.createdAt)
      }));
      setOrders(parsedOrders);
    }
  }, []);

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const createOrder = async (
    items: CartItem[], 
    total: number, 
    shippingAddress: Address, 
    paymentMethod: string
  ): Promise<string> => {
    if (!user) throw new Error('User must be logged in to create order');

    const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const trackingNumber = 'TRK-' + Math.random().toString(36).substr(2, 12).toUpperCase();

    const newOrder: Order = {
      id: orderId,
      userId: user.id,
      items: [...items],
      total,
      status: 'pending',
      createdAt: new Date(),
      shippingAddress: { ...shippingAddress },
      paymentMethod,
      trackingNumber
    };

    setOrders(prev => [newOrder, ...prev]);
    
    // Simulate order processing
    setTimeout(() => {
      updateOrderStatus(orderId, 'processing');
    }, 2000);

    return orderId;
  };

  const getOrderById = (orderId: string): Order | undefined => {
    return orders.find(order => order.id === orderId);
  };

  const getUserOrders = (): Order[] => {
    if (!user) return [];
    return orders
      .filter(order => order.userId === user.id)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  return (
    <OrderContext.Provider value={{
      orders,
      createOrder,
      getOrderById,
      getUserOrders,
      updateOrderStatus
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};