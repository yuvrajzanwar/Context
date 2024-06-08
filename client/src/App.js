// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HostLogin from './components/HostLogin';
import ContestantLogin from './components/ContestantLogin';
import DeveloperLogin from './components/DeveloperLogin';
import AboutUs from './components/AboutUs';
import HostSignUp from './components/HostSignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/host-login" element={<HostLogin />} />
        <Route path="/contestant-login" element={<ContestantLogin />} />
        <Route path="/developer-login" element={<DeveloperLogin />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/signup" element={<HostSignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
