import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './RegisterView.css';
import { UserContext } from '../contexts/UserContext'; 
import { useNavigate } from 'react-router-dom'; 

export default function RegisterView() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const { setUser } = useContext(UserContext); 
  const navigate = useNavigate(); 

  const movieGenres = [
    'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 
    'Thriller', 'Fantasy', 'Adventure', 'Documentary', 'Animation', 'Mystery'
  ];

  const handleGenreChange = (genre) => {
    setSelectedGenres(prevGenres => {
      if (prevGenres.includes(genre)) {
        return prevGenres.filter(g => g !== genre);  
      } else {
        return [...prevGenres, genre]; 
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); 


    if (!firstName || !lastName || !email || !password || !rePassword) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== rePassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (selectedGenres.length < 1) {
      setErrorMessage('Please select at least one genre');
      return;
    }

    
    const userData = {
      firstName,
      lastName,
      email,
      selectedGenres
    };

    setUser(userData);  
    alert('Registration Successful');

    
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <p>This is the Register View!</p>

      
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Re-enter Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />

        <div className="genre-selection">
          <p>Select your favorite movie genres (at least one):</p>
          {movieGenres.map((genre) => (
            <label key={genre}>
              <input
                type="checkbox"
                value={genre}
                checked={selectedGenres.includes(genre)}
                onChange={() => handleGenreChange(genre)}
              />
              {genre} 
            </label>
          ))}
        </div>

        <button type="submit">Register</button>
      </form>

      <p>Already have an account? <Link to="/login">Sign In</Link></p>
    </div>
  );
}
