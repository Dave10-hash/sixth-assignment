import React from 'react';
import { useCart } from '../contexts/CartContext';

const MovieTile = ({ movie }) => {
  const { addToCart, removeFromCart, isInCart } = useCart(); 

  const handleClick = () => {
    if (isInCart(movie.id)) {
      removeFromCart(movie.id);  
    } else {
      addToCart(movie);  
    }
  };

  return (
    <div className="movie-tile">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={handleClick}>
        {isInCart(movie.id) ? 'Added' : 'Buy'}  
      </button>
    </div>
  );
};

export default MovieTile;
