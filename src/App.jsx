import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import MoviesView from './views/MoviesView';
import GenreView from './views/GenreView';
import DetailView from './views/DetailView'; 

const App = () => {
  return (
    <Router>
      <div>
        

        
        <nav style={styles.nav}>
          <Link to="/" style={styles.navButton}>Home</Link>
          <Link to="/login" style={styles.navButton}>Login</Link>
          <Link to="/register" style={styles.navButton}>Register</Link>
          <Link to="/genres" style={styles.navButton}>Movie List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/genres" element={<GenreView />} />
          <Route path="/movies/details/:id" element={<DetailView />} /> 
        </Routes>

        
      </div>
    </Router>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
  },
  navButton: {
    padding: '10px 20px',
    margin: '0 10px',
    textDecoration: 'none',
    color: 'blue',
    border: '1px solid blue',
    borderRadius: '5px',
  },
};

export default App;