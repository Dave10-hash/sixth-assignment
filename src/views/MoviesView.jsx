import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import './MoviewView.css';

const MoviesView = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);  
  const location = useLocation();
  const genreId = new URLSearchParams(location.search).get('genre'); 

  useEffect(() => {
    fetchGenres();
    if (genreId) {
      fetchMovies(genreId, page);  
    }
  }, [genreId, page]); 

  const fetchMovies = async (genreId, page) => {
    const API_KEY = '7a4bf30fd257cea8c4f7fc527fea9e07';
    const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

    try {
      const response = await axios.get(BASE_URL, {
        params: { api_key: API_KEY, with_genres: genreId, page: page },
      });
      setMovies(response.data.results); 
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchGenres = async () => {
    const API_KEY = '7a4bf30fd257cea8c4f7fc527fea9e07';
    const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

    try {
      const response = await axios.get(BASE_URL, {
        params: { api_key: API_KEY },
      });
      setGenres(response.data.genres); 
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);  
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);  
    }
  };

  return (
    <div className="movies-view">
     
      <div className="genres-container">
        <h3>Select a Genre</h3>
        <div className="genre-list">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              to={`/movies?genre=${genre.id}`}
              className="genre-card"
            >
              <h4>{genre.name}</h4>
            </Link>
          ))}
        </div>
      </div>

      <div className="movies-container">
        <div className="movies-box">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <Link
                to={`/movies/details/${movie.id}`}
                key={movie.id}
                className="movie-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />
                <h3>{movie.title}</h3>
              </Link>
            ))
          ) : (
            <p>No movies available for this genre.</p>
          )}
        </div>

       
        <div className="pagination-controls">
          <button onClick={handlePrevPage} disabled={page <= 1}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MoviesView;
