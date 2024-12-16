import React, { useEffect, useState } from 'react';
import MovieTile from "../components/MovieTitle"; // Go up one level and then into the components folder
import { useCart } from '../contexts/CartContext';  

const MoviesView = () => {
  const [movies, setMovies] = useState([]); // State to hold movie data
  const [loading, setLoading] = useState(true); // Loading state for fetching
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const { cart } = useCart();  // Access the cart context

  // Fetch movies from TMDb API based on the current page
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = '7a4bf30fd257cea8c4f7fc527fea9e07'; // Replace with your actual TMDb API key
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`;

        const response = await fetch(url);
        const data = await response.json();

        const movieData = data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,  // TMDb's image URL
        }));

        setMovies(movieData); // Set the movie data to state
        setTotalPages(data.total_pages); // Set total pages for pagination
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchMovies();
  }, [currentPage]); // Run when currentPage changes

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1); // Increment page if not on the last page
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement page if not on the first page
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching
  }

  return (
    <div className="movies-view">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination buttons */}
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
