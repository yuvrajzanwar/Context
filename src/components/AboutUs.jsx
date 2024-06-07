// src/components/AboutUs.js
import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="intro">
        <h1>About Context</h1>
        <p>Context is a cutting-edge platform designed to make contest creation and participation seamless and enjoyable. Whether you're a host looking to create engaging contests or a contestant eager to test your knowledge, Context has you covered.</p>
      </div>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to empower individuals and organizations to create, manage, and participate in customized contests effortlessly, leveraging the power of AI to generate dynamic and engaging content.</p>
      </div>
      <div className="history">
        <h2>Our Story</h2>
        <p>Founded in 2024, Context was born out of a need for a more flexible and user-friendly contest platform. Over the years, we've grown and evolved, constantly improving our features and expanding our community.</p>
      </div>
      <div className="team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="yuvrajzanwarphoto.jpeg" alt="Yuvraj Zanwar" />
          <h3>Yuvraj Zanwar</h3>
        </div>
        <div className="team-member">
          <img src="" alt="Sarthak Chaure" />
          <h3>Sarthak Chaure</h3>
        </div>
        <div className="team-member">
          <img src="/path/to/photo.jpg" alt="Kartik Vhonale" />
          <h3>Kartik Vhonale</h3>
        </div>
      </div>
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <p>"Context has revolutionized the way we create and manage contests. The AI-generated questions are a game-changer!" - Alex Johnson</p>
      </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@context.com</p>
        <p>Follow us on <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a>.</p>
      </div>
    </div>
  );
};

export default AboutUs;
