import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  // Inline styles for body section
  const bodyStyle = {
    backgroundColor: '#ffffff',
    padding: '60px 40px',
    textAlign: 'center',
  };

  const sectionTitleStyle = {
    fontSize: '2rem',
    color: '#1e293b',
    marginBottom: '20px',
    fontWeight: '700',
  };

  const sectionSubtitleStyle = {
    fontSize: '1rem',
    color: '#475569',
    marginBottom: '40px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6',
  };

  const featuresStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const featureBoxStyle = {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    padding: '20px',
    borderRadius: '12px',
    width: '250px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  // Inline styles for footer
  const footerStyle = {
    backgroundColor: '#1e293b',
    color: 'white',
    textAlign: 'center',
    padding: '30px 40px',
    fontSize: '14px',
    marginTop: '60px',
  };

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <div className="home-container" style={{ marginBottom: '40px' }}>
        <h1 className="home-title">Welcome to City Parking</h1>
        <p className="home-subtitle">Find parking spots easily in your city.</p>
        <button className="home-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* Body Section */}
      <div style={bodyStyle}>
        <h2 style={sectionTitleStyle}>Why Choose Us?</h2>
        <p style={sectionSubtitleStyle}>
          We make parking simple and stress-free. View available slots, book online, and save your time.
        </p>
        <div style={featuresStyle}>
          <div style={featureBoxStyle}>
            <h3> Easy Booking</h3>
            <p>Reserve your parking spot in just a few clicks.</p>
          </div>
          <div style={featureBoxStyle}>
            <h3>Real-Time Location</h3>
            <p>See what's available near you instantly.</p>
          </div>
          <div style={featureBoxStyle}>
            <h3> Secure & Reliable</h3>
            <p>Your data and vehicles are safe with us.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f9fafb' }}>
        <h2 style={{ fontSize: '1.75rem', color: '#1e293b', marginBottom: '10px' }}>Contact Us</h2>
        <p style={{ color: '#475569', fontSize: '1rem', margin: '5px 0' }}>Email: support@cityparking.com</p>
        <p style={{ color: '#475569', fontSize: '1rem', margin: '5px 0' }}>Phone: +263 77 123 4567</p>
        <p style={{ color: '#475569', fontSize: '1rem', margin: '5px 0' }}>Location: Harare, Zimbabwe</p>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} City Parking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
