import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";  
import "./DetailView.css";

function DetailView() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const { addToCart } = useCart();  

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
        );
        setMovie(response.data);
      } catch (err) {
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>No movie data found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(movie);  
  };

  return (
    <div className="movie-detail">
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
     
    </div>
  );
}

export default DetailView;
