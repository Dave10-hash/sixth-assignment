import { useCart } from "../contexts/CartContext";
import "./CartView.css";

const CartView = () => {
  const { cart, removeFromCart } = useCart();  // Access cart and removeFromCart function

  const handleRemove = (movieId) => {
    removeFromCart(movieId);  // Remove movie from the cart
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((movie) => (
            <div key={movie.id} className="cart-item">
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_title}
                  className="cart-item-poster"
                />
              )}
              <h3>{movie.original_title}</h3>
              <button onClick={() => handleRemove(movie.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartView;
