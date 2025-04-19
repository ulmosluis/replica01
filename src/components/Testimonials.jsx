import React from 'react';
/* import './Testimonials.css'; // Optional: Add styles for the testimonials section */

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src="public/images/user1.jpg" alt="User 1" className="testimonial-image" />
          <p className="testimonial-quote">"This product changed my life! Highly recommended."</p>
          <h3 className="testimonial-name">John Doe</h3>
        </div>
        <div className="testimonial-card">
          <img src="public/images/user2.jpg" alt="User 2" className="testimonial-image" />
          <p className="testimonial-quote">"Amazing experience! The team is fantastic."</p>
          <h3 className="testimonial-name">Jane Smith</h3>
        </div>
        <div className="testimonial-card">
          <img src="public/images/user3.jpg" alt="User 3" className="testimonial-image" />
          <p className="testimonial-quote">"I can't imagine my life without it. Simply the best."</p>
          <h3 className="testimonial-name">Alice Johnson</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;