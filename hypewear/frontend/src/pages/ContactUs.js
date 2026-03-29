import React, { useState } from 'react';
import './InfoPages.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="info-page">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <p>support@hypewear.com</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h3>Phone</h3>
                  <p>+91 1800-123-4567</p>
                  <p className="note">Mon-Sat, 9 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h3>Address</h3>
                  <p>123 Fashion Street</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="icon">🕒</span>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            
            {submitted && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;