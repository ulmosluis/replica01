import React from 'react';
import './Hero.css'; // Optional: Add styles for the hero section

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Your Landing Page</h1>
        <p className="hero-subtitle">Build something amazing with React.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;