import React, { useEffect, useState } from 'react';
import MovieTile from "../components/MovieTitle"; 
import { useCart } from '../contexts/CartContext';  

const MoviesView = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 
  const { cart } = useCart(); 

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '7a4bf30fd257cea8c4f7fc527fea9e07'; 
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`;

        const response = await fetch(url);
        const data = await response.json();

        const movieData = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,  
        }));

        setMovies(movieData); 
        setTotalPages(data.total_pages); 
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchMovies();
  }, [currentPage]); 

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); 
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); 
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="movies-view">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </div>

      
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesView;
