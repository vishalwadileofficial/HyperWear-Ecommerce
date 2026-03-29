import React from 'react';
import './InfoPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: December 14, 2025</p>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>Introduction</h2>
            <p>
              At HypeWear, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or make a purchase.
            </p>
          </section>

          <section className="policy-section">
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>When you register or make a purchase, we may collect:</p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely by payment gateways)</li>
              <li>Order history and preferences</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Cookies and usage data</li>
              <li>Pages visited and time spent on site</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Send promotional emails (with your consent)</li>
              <li>Improve our website and customer service</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Information Sharing</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Shipping companies, payment processors, and IT service providers</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. 
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p>Security measures include:</p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure payment gateway integration</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
              and understand user preferences. You can control cookie preferences through your browser settings.
            </p>
            <p><strong>Types of cookies we use:</strong></p>
            <ul>
              <li>Essential cookies (necessary for site functionality)</li>
              <li>Analytics cookies (to understand site usage)</li>
              <li>Marketing cookies (for personalized content)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
            </ul>
            <p>To exercise these rights, contact us at privacy@hypewear.com</p>
          </section>

          <section className="policy-section">
            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, 
              unless a longer retention period is required by law. Order information is typically retained for 7 years 
              for tax and accounting purposes.
            </p>
          </section>

          <section className="policy-section">
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of 
              these external sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section className="policy-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 18. We do not knowingly collect personal information from 
              children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="policy-section">
            <h2>Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="contact-info">
              <p>📧 Email: privacy@hypewear.com</p>
              <p>📞 Phone: +91 1800-123-4567</p>
              <p>📍 Address: 123 Fashion Street, Mumbai, Maharashtra 400001, India</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>Consent</h2>
            <p>
              By using our website and services, you consent to the collection and use of your information as described 
              in this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;