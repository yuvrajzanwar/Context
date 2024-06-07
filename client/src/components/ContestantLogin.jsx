// src/components/ContestantLogin.js
import React from 'react';
import '../styles/Login.css';

const ContestantLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Contestant Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ContestantLogin;
