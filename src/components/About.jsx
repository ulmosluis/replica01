import React from 'react';
/* import './About.css'; // Optional: Add styles for the about section */


function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/public/images/logo.jpg" alt="About Us" />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            We are passionate about building amazing products that make a difference. Our team is dedicated to delivering high-quality solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;