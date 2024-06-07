// src/components/HostLogin.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const HostLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Host Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
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
