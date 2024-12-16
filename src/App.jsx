import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';  
import { CartProvider } from './contexts/CartContext'; 
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MoviesView from './views/MoviesView';
import GenreView from './views/GenreView';
import DetailView from './views/DetailView';
import CartView from './views/CartView';
import SettingsView from './views/SettingsView';


import './App.css';

const App = () => {
  return (
    <UserProvider>  
      <CartProvider> 
        <Router>
          <div>
            
            <nav className="nav">
              <Link to="/" className="navButton">Home</Link>
              <Link to="/login" className="navButton">Login</Link>
              <Link to="/register" className="navButton">Register</Link>
              <Link to="/movies" className="navButton">Movies</Link>
              <Link to="/genres" className="navButton">Genres</Link>
              <Link to="/cart" className="navButton">Cart</Link>
              <Link to="/settings" className="navButton">Settings</Link> 
            </nav>

            
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/movies" element={<MoviesView />} />
              <Route path="/genres" element={<GenreView />} />
              <Route path="/movies/details/:id" element={<DetailView />} /> 
              <Route path="/cart" element={<CartView />} />
              <Route path="/settings" element={<SettingsView />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
