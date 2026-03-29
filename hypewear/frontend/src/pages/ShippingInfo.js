import React from 'react';
import './InfoPages.css';

const ShippingInfo = () => {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Shipping Information</h1>
        
        <div className="info-content">
          <section className="info-section">
            <h2>Shipping Policy</h2>
            <p>
              At HypeWear, we strive to deliver your orders quickly and safely. Here's everything you need to know about our shipping process.
            </p>
          </section>

          <section className="info-section">
            <h2>Delivery Charges</h2>
            <div className="pricing-table">
              <div className="pricing-row">
                <span className="label">Orders above ₹999:</span>
                <span className="value free">FREE Shipping</span>
              </div>
              <div className="pricing-row">
                <span className="label">Orders below ₹999:</span>
                <span className="value">₹50 Shipping Fee</span>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>Delivery Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">📦</div>
                <div className="timeline-content">
                  <h3>Order Processing</h3>
                  <p>1-2 business days</p>
                  <span className="detail">Your order is verified and prepared for shipment</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">🚚</div>
                <div className="timeline-content">
                  <h3>Metro Cities</h3>
                  <p>3-5 business days</p>
                  <span className="detail">Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">📍</div>
                <div className="timeline-content">
                  <h3>Other Cities</h3>
                  <p>5-7 business days</p>
                  <span className="detail">All other locations across India</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">🏔️</div>
                <div className="timeline-content">
                  <h3>Remote Areas</h3>
                  <p>7-10 business days</p>
                  <span className="detail">Hill stations, islands, and remote locations</span>
                </div>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>Tracking Your Order</h2>
            <ol className="steps-list">
              <li>Once your order is shipped, you'll receive an email with tracking details</li>
              <li>You can track your order from your Profile → My Orders section</li>
              <li>Real-time updates will be sent via SMS and email</li>
              <li>Contact our support team if you need assistance with tracking</li>
            </ol>
          </section>

          <section className="info-section">
            <h2>Shipping Partners</h2>
            <p>
              We work with India's most reliable courier services including Blue Dart, Delhivery, and India Post 
              to ensure safe and timely delivery of your orders.
            </p>
          </section>

          <section className="info-section">
            <h2>International Shipping</h2>
            <p className="notice">
              Currently, we only ship within India. International shipping will be available soon. 
              Stay tuned for updates!
            </p>
          </section>

          <section className="info-section">
            <h2>Important Notes</h2>
            <ul className="notes-list">
              <li>Delivery times are estimates and may vary during peak seasons or due to unforeseen circumstances</li>
              <li>Ensure your shipping address is complete and accurate to avoid delivery delays</li>
              <li>Someone must be present to receive the delivery. ID proof may be required</li>
              <li>Orders are not shipped on Sundays and public holidays</li>
              <li>We do not ship to PO Box addresses</li>
            </ul>
          </section>

          <section className="info-section">
            <h2>Need Help?</h2>
            <p>
              For any shipping-related queries, contact our customer support:
            </p>
            <div className="contact-info">
              <p>📧 Email: support@hypewear.com</p>
              <p>📞 Phone: +91 1800-123-4567</p>
              <p>🕒 Mon-Sat, 9 AM - 6 PM IST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;