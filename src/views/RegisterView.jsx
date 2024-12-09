import { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterView.css';

export default function RegisterView() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password || !rePassword) {
      setErrorMessage('All fields are required');
      return;
    }
    if (password !== rePassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    alert('Registration Successful');
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
        
        <button type="submit">Register</button>
      </form>
      
      <p>Already have an account? <Link to="/login">Sign In</Link></p>
    </div>
  );
}
