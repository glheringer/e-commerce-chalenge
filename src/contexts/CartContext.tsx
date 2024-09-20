import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
  cartItems: any[];
  totalPrice: number;
  addToCart: (item: any) => void;
//   removeFromCart: (itemId: number) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item: any) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTotalPrice((prevTotal) => prevTotal + item.price);
  };

  // Função para remover um item do carrinho
//   const removeFromCart = (itemId: number) => {
//     setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
//     const item = cartItems.find(item => item.id === itemId);
//     if (item) {
//       setTotalPrice((prevTotal) => prevTotal - item.price);
//     }
//   };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
