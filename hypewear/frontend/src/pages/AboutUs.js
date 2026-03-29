import React from 'react';
import './InfoPages.css';

const AboutUs = () => {
  return (
    <div className="info-page">
      <div className="container">
        <h1>About HypeWear</h1>
        
        <div className="about-hero">
          <p className="lead">
            Your destination for trendy fashion wear. Quality clothing for everyone.
          </p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2024, HypeWear emerged from a simple vision: to make quality fashion accessible to everyone. 
              We believe that great style shouldn't break the bank, and everyone deserves to look and feel their best.
            </p>
            <p>
              From traditional Indian ethnic wear to contemporary Western styles, we curate collections that celebrate 
              diversity and individuality. Our team scours the fashion world to bring you the latest trends and timeless classics.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              To provide high-quality, affordable fashion for men, women, and kids while delivering exceptional customer service. 
              We're committed to making online shopping easy, enjoyable, and reliable.
            </p>
          </section>

          <section className="about-section">
            <h2>Why Choose Us?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">✨</span>
                <h3>Quality Products</h3>
                <p>100% authentic brands and quality-checked items</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚚</span>
                <h3>Fast Delivery</h3>
                <p>Free shipping on orders above ₹999</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <h3>Easy Returns</h3>
                <p>7-day hassle-free return policy</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💳</span>
                <h3>Secure Payment</h3>
                <p>Multiple payment options for your convenience</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Customer First:</strong> Your satisfaction is our top priority</li>
              <li><strong>Quality:</strong> We never compromise on product quality</li>
              <li><strong>Integrity:</strong> Honest pricing and transparent policies</li>
              <li><strong>Innovation:</strong> Constantly improving our services</li>
              <li><strong>Sustainability:</strong> Committed to eco-friendly practices</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Collections</h2>
            <p>
              We offer an extensive range of clothing for the entire family:
            </p>
            <ul className="collections-list">
              <li><strong>Men's Fashion:</strong> From traditional kurtas to modern casuals</li>
              <li><strong>Women's Fashion:</strong> Elegant sarees to trendy western wear</li>
              <li><strong>Kids' Collection:</strong> Comfortable and stylish clothes for children</li>
              <li><strong>Indian Ethnic:</strong> Celebrate tradition with our ethnic collection</li>
              <li><strong>Western Wear:</strong> Contemporary styles for everyday fashion</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;