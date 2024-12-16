import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import useCart hook

const MovieTile = ({ movie }) => {
  const { addToCart, removeFromCart, isInCart } = useCart(); // Use the cart context

  const handleClick = () => {
    if (isInCart(movie.id)) {
      removeFromCart(movie.id);  // Remove from cart if it's already added
    } else {
      addToCart(movie);  // Add to cart if not added
    }
  };

  return (
    <div className="movie-tile">
      <img src={movie.posterUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={handleClick}>
        {isInCart(movie.id) ? 'Added' : 'Buy'}  {/* Toggle button text */}
      </button>
    </div>
  );
};

export default MovieTile;
