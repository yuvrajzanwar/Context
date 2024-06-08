// src/components/HostLogin.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const HostLogin = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/hosts/login`, { username, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Host Login</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <div className="signup-link">
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default HostLogin;
