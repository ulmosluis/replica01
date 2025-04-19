import React from 'react';
/* import './Features.css'; // Optional: Add styles for the features section */

function Features() {
  return (<>    
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
    <section className="contact-us" id="contact-us">
      <h2 className="contact-us-title">Contact Us</h2>
      <form className="contact-us-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="contact-us-button">Send Message</button>
      </form>
    </section>
  </>

  );
}

export default Features;