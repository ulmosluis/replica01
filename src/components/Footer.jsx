import React from 'react';
import './Footer.css'; // Optional: Add styles for the footer section

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p className="footer-copyright">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;