import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">FreeFlicks</Link>
      <ul>
        <li>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Register</Link> 
          <Link to="/about">About</Link>
          <Link to="/genres">Movie List</Link>
        </li>
      </ul>
    </nav>
  );
}
