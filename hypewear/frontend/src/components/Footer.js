import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>HypeWear</h3>
          <p>Your destination for trendy fashion wear. Quality clothing for everyone.</p>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><a href="/products?category=Men">Men</a></li>
            <li><a href="/products?category=Women">Women</a></li>
            <li><a href="/products?category=Kids">Kids</a></li>
            <li><a href="/products?style=Indian">Indian Wear</a></li>
            <li><a href="/products?style=Western">Western Wear</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/size-guide">Size Guide</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>About</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📹</a>
          </div>
          <p className="contact-info">
            📧 support@hypewear.com<br/>
            📞 +91 1800-123-4567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 HypeWear. All rights reserved.</p>
        <div className="payment-methods">
          <span>💳 Card</span>
          <span>📱 UPI</span>
          <span>💵 COD</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;