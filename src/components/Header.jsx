import React from 'react';
import './Header.css'; // Optional: Add styles for the header

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="public/images/logo.jpg" alt="Logo" width="150" height="50" />
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;