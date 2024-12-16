import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
  };

  const removeFromCart = (movieId) => {
    setCart((prevCart) => prevCart.filter((movie) => movie.id !== movieId));
  };

  const isInCart = (movieId) => {
    return cart.some((movie) => movie.id === movieId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};
