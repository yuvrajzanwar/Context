// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="navbar-left">
          <h1>CONTEXT</h1>
        </div>
        <div className="navbar-right">
          <Link to="/developer-login" className="nav-link">Developer Login</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
        </div>
      </nav>
      <div className="sections">
        <div className="section">
          <Link to="/host-login">
            <button className="login-button">Host Login</button>
          </Link>
        </div>
        <div className="section">
          <Link to="/contestant-login">
            <button className="login-button">Contestant Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
