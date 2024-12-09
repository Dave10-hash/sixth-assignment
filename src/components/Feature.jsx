import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Feature.css';

const Feature = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);


  const fetchMovies = async () => {
    const API_KEY = "7a4bf30fd257cea8c4f7fc527fea9e07";
    const BASE_URL = "https://api.themoviedb.org/3/movie/now_playing";

    try {
      const response = await axios.get(BASE_URL, {
        params: { api_key: API_KEY },
      });
      const shuffledMovies = shuffleArray(response.data.results); 
      setMovies(shuffledMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };


  const shuffleArray = (array) => {
    let shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
    }
    return shuffledArray;
  };

  return (
    <div className="feature-container">
      <h2>Featured Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movies/details/${movie.id}`} key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Feature;