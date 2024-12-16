import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';  // Import the UserProvider
import { CartProvider } from './contexts/CartContext';  // Import CartProvider if needed
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MoviesView from './views/MoviesView';
import GenreView from './views/GenreView';
import DetailView from './views/DetailView';
import CartView from './views/CartView';
import SettingsView from './views/SettingsView'; // Import the SettingsView component


import './App.css';

const App = () => {
  return (
    <UserProvider>  {/* Wrap the entire app with UserProvider */}
      <CartProvider> {/* Wrap the entire app with CartProvider */}
        <Router>
          <div>
            {/* Navigation bar */}
            <nav className="nav">
              <Link to="/" className="navButton">Home</Link>
              <Link to="/login" className="navButton">Login</Link>
              <Link to="/register" className="navButton">Register</Link>
              <Link to="/movies" className="navButton">Movies</Link>
              <Link to="/genres" className="navButton">Genres</Link>
              <Link to="/cart" className="navButton">Cart</Link>
              <Link to="/settings" className="navButton">Settings</Link> {/* Add the settings link */}
            </nav>

            {/* Routes for different pages */}
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/movies" element={<MoviesView />} />
              <Route path="/genres" element={<GenreView />} />
              <Route path="/movies/details/:id" element={<DetailView />} /> {/* Movie detail page */}
              <Route path="/cart" element={<CartView />} />
              <Route path="/settings" element={<SettingsView />} /> {/* Add the settings route */}
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
