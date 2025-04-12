import React from 'react';
import './Features.css'; // Optional: Add styles for the features section

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="features-title">Our Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <img src="public/images/feature1.jpg" alt="Feature 1" className="feature-icon" />
          <h3 className="feature-title">Feature One</h3>
          <p className="feature-description">This is a description of the first feature. It's amazing!</p>
        </div>
        <div className="feature-card">
          <img src="public/images/feature2.jpg" alt="Feature 2" className="feature-icon" />
          <h3 className="feature-title">Feature Two</h3>
          <p className="feature-description">This is a description of the second feature. It's incredible!</p>
        </div>
        <div className="feature-card">
          <img src="public/images/feature3.jpg" alt="Feature 3" className="feature-icon" />
          <h3 className="feature-title">Feature Three</h3>
          <p className="feature-description">This is a description of the third feature. It's fantastic!</p>
        </div>
      </div>
    </section>
  );
}

export default Features;