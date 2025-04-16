import React from 'react';
import './Hero.css'; // Optional: Add styles for the hero section

function Hero() {
  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: "url('public/images/hero.jpg')" }}
    >
      <div className="hero-overlay"></div> {/* Background overlay */}
      <div className="hero-content">
        <p className="hero-tagline">Your Journey Starts Here</p>
        <h1 className="hero-title">Welcome to Your Landing Page</h1>
        <p className="hero-subtitle">
          Build something amazing with React and take your projects to the next level.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Get Started</button>
          <button className="hero-button secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;