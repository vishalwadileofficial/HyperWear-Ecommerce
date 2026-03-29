import React from 'react';
import './InfoPages.css';

const Returns = () => {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Returns & Exchanges</h1>
        
        <div className="info-content">
          <section className="info-section highlight">
            <h2>7-Day Return Policy</h2>
            <p>
              We want you to love your purchase! If you're not completely satisfied, you can return or exchange 
              items within 7 days of delivery.
            </p>
          </section>

          <section className="info-section">
            <h2>Eligible for Return/Exchange</h2>
            <div className="eligibility-grid">
              <div className="eligible-item yes">
                <span className="icon">✅</span>
                <div>
                  <h3>Accepted</h3>
                  <ul>
                    <li>Defective or damaged items</li>
                    <li>Wrong item delivered</li>
                    <li>Size doesn't fit</li>
                    <li>Color/style mismatch</li>
                    <li>Quality issues</li>
                  </ul>
                </div>
              </div>
              <div className="eligible-item no">
                <span className="icon">❌</span>
                <div>
                  <h3>Not Accepted</h3>
                  <ul>
                    <li>Items without original tags</li>
                    <li>Worn or washed items</li>
                    <li>Damaged packaging</li>
                    <li>Items bought on sale (final sale)</li>
                    <li>Innerwear and accessories</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>How to Return/Exchange</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Request Return</h3>
                <p>Go to Profile → My Orders and click "Return Item" on the order you want to return</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Select Reason</h3>
                <p>Choose the reason for return and upload photos if applicable</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Pack Securely</h3>
                <p>Pack the item in its original packaging with all tags attached</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <h3>Schedule Pickup</h3>
                <p>Our courier partner will pick up the item from your address</p>
              </div>
              <div className="step-card">
                <div className="step-number">5</div>
                <h3>Get Refund</h3>
                <p>Once verified, refund will be processed within 5-7 business days</p>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>Refund Methods</h2>
            <div className="refund-options">
              <div className="refund-option">
                <h3>💳 Original Payment Method</h3>
                <p>Refund will be credited to your original payment source</p>
                <span className="timing">Processing Time: 5-7 business days</span>
              </div>
              <div className="refund-option">
                <h3>🎁 Store Credit</h3>
                <p>Get instant store credit to use on your next purchase</p>
                <span className="timing">Processing Time: Instant</span>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2>Exchange Policy</h2>
            <p>
              Want a different size or color? We offer free exchanges within 7 days of delivery. 
              Simply follow the return process and select "Exchange" instead of "Return".
            </p>
            <ul className="notes-list">
              <li>Exchanges are subject to availability of the requested size/color</li>
              <li>If the item is unavailable, you'll receive a full refund</li>
              <li>Only one exchange is allowed per order</li>
            </ul>
          </section>

          <section className="info-section">
            <h2>Return Shipping</h2>
            <div className="shipping-info-box">
              <p><strong>Free Return Pickup:</strong> We provide free pickup for all returns and exchanges</p>
              <p><strong>No Questions Asked:</strong> Hassle-free returns, no complicated procedures</p>
            </div>
          </section>

          <section className="info-section">
            <h2>Important Conditions</h2>
            <ul className="conditions-list">
              <li>Items must be unused, unworn, and unwashed</li>
              <li>Original tags and labels must be intact</li>
              <li>Product must be in original packaging</li>
              <li>Invoice/bill must be included in the return package</li>
              <li>Return request must be raised within 7 days of delivery</li>
            </ul>
          </section>

          <section className="info-section">
            <h2>Cancellation Policy</h2>
            <p>
              You can cancel your order anytime before it's shipped. Once shipped, you'll need to follow 
              the return process. To cancel, go to Profile → My Orders → Cancel Order.
            </p>
          </section>

          <section className="info-section">
            <h2>Need Help?</h2>
            <p>
              Our customer support team is here to assist you with returns and exchanges.
            </p>
            <div className="contact-info">
              <p>📧 Email: returns@hypewear.com</p>
              <p>📞 Phone: +91 1800-123-4567</p>
              <p>🕒 Mon-Sat, 9 AM - 6 PM IST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;