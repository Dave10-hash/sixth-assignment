import React, { useState } from 'react';
import './setting.css'; 
const SettingsView = () => {
 
  const [user, setUser] = useState({
    firstName: 'Rusiru',
    lastName: 'Rajaguru',
    email: 'dewsara12b@gmail.com',
    preferredGenre: 'Action',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log('User data saved:', user);
    alert('Your settings have been updated!');
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            
          />
        </div>

        <div>
          <label htmlFor="preferredGenre">Preferred Genre:</label>
          <select
            id="preferredGenre"
            name="preferredGenre"
            value={user.preferredGenre}
            onChange={handleChange}
          >
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
           
          </select>
        </div>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsView;
