// src/components/DeveloperLogin.js
import React from 'react';
import '../styles/Login.css';

const DeveloperLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Developer Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default DeveloperLogin;
