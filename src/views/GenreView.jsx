import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './GenreView.css';

const GenreView = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const API_KEY = "7a4bf30fd257cea8c4f7fc527fea9e07";
    const BASE_URL = "https://api.themoviedb.org/3/genre/movie/list";

    try {
      const response = await axios.get(BASE_URL, {
        params: { api_key: API_KEY },
      });
      setGenres(response.data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  return (
    <div className="genres-page">
      <h2>Select a Genre</h2>
      <div className="genre-list">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            to={`/movies?genre=${genre.id}`}
            className="genre-card"
          >
            <h3>{genre.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenreView;
