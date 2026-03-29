import React from 'react';
import './InfoPages.css';

const Careers = () => {
  const openings = [
    {
      title: "Senior Frontend Developer",
      department: "Technology",
      location: "Mumbai / Remote",
      type: "Full-time",
      experience: "3-5 years"
    },
    {
      title: "Customer Service Representative",
      department: "Customer Support",
      location: "Mumbai",
      type: "Full-time",
      experience: "1-2 years"
    },
    {
      title: "Fashion Buyer",
      department: "Merchandising",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Mumbai / Remote",
      type: "Full-time",
      experience: "2-3 years"
    }
  ];

  return (
    <div className="info-page">
      <div className="container">
        <h1>Careers at HypeWear</h1>
        
        <div className="careers-hero">
          <h2>Join Our Team</h2>
          <p className="lead">
            Be part of India's fastest-growing fashion e-commerce platform. We're looking for passionate individuals 
            who want to make a difference in the fashion industry.
          </p>
        </div>

        <div className="careers-content">
          <section className="careers-section">
            <h2>Why Work With Us?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-icon">💰</span>
                <h3>Competitive Salary</h3>
                <p>Industry-leading compensation packages</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">🏠</span>
                <h3>Work from Home</h3>
                <p>Flexible remote work options</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">🏥</span>
                <h3>Health Insurance</h3>
                <p>Comprehensive medical coverage</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">📚</span>
                <h3>Learning & Development</h3>
                <p>Continuous skill enhancement opportunities</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">🎉</span>
                <h3>Team Events</h3>
                <p>Regular team building activities</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon">🚀</span>
                <h3>Career Growth</h3>
                <p>Fast-track career advancement</p>
              </div>
            </div>
          </section>

          <section className="careers-section">
            <h2>Our Culture</h2>
            <p>
              At HypeWear, we believe in creating an inclusive, innovative, and collaborative work environment. 
              We value creativity, initiative, and a customer-first mindset. Our team is our greatest asset, 
              and we invest in creating a workplace where everyone can thrive.
            </p>
            <ul className="culture-list">
              <li><strong>Innovation First:</strong> We encourage new ideas and creative solutions</li>
              <li><strong>Work-Life Balance:</strong> We respect your personal time</li>
              <li><strong>Diversity & Inclusion:</strong> We celebrate differences and promote equality</li>
              <li><strong>Growth Mindset:</strong> Continuous learning is part of our DNA</li>
              <li><strong>Collaboration:</strong> We win together as a team</li>
            </ul>
          </section>

          <section className="careers-section">
            <h2>Current Openings</h2>
            <div className="jobs-list">
              {openings.map((job, index) => (
                <div key={index} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-details">
                    <span className="job-detail">
                      <strong>Department:</strong> {job.department}
                    </span>
                    <span className="job-detail">
                      <strong>Location:</strong> {job.location}
                    </span>
                    <span className="job-detail">
                      <strong>Experience:</strong> {job.experience}
                    </span>
                  </div>
                  <button className="apply-btn">Apply Now</button>
                </div>
              ))}
            </div>
          </section>

          <section className="careers-section">
            <h2>Application Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Submit Application</h3>
                  <p>Send your resume and cover letter to careers@hypewear.com</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Initial Screening</h3>
                  <p>Our HR team reviews your application</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Technical Interview</h3>
                  <p>Meet with the hiring manager and team</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Final Round</h3>
                  <p>Discussion with leadership and offer</p>
                </div>
              </div>
            </div>
          </section>

          <section className="careers-section">
            <h2>Don't See Your Role?</h2>
            <p>
              We're always looking for talented individuals. Even if you don't see a suitable opening, 
              feel free to send us your resume. We'll keep it on file for future opportunities.
            </p>
            <div className="contact-info">
              <p>📧 Email: careers@hypewear.com</p>
              <p>Subject: [Your Name] - [Position Interested In]</p>
            </div>
          </section>

          <section className="careers-section cta-section">
            <h2>Ready to Join Us?</h2>
            <p>Take the next step in your career. Be part of something amazing!</p>
            <button className="cta-btn" onClick={() => window.location.href = 'mailto:careers@hypewear.com'}>
              Send Your Resume
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;