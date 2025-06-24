import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <div className="home-container">
        <h1 className="home-title">Welcome to City Parking</h1>
        <p className="home-subtitle">Find parking spots easily in your city.</p>
        <button className="home-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* Image Banner */}
      <div className="banner-section">
        <img
          src="https://images.unsplash.com/photo-1583267746890-06b85f0f1456?auto=format&fit=crop&w=1600&q=80"
          alt="Parking Banner"
          className="banner-image"
        />
      </div>

      {/* Body Section */}
      <div className="home-body">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-subtitle">
          We make parking simple and stress-free. View available slots, book online, and save your time.
        </p>
        <div className="features fade-in">
          <div className="feature-box">
            <h3>🅿️ Easy Booking</h3>
            <p>Reserve your parking spot in just a few clicks.</p>
          </div>
          <div className="feature-box">
            <h3>📍 Real-Time Location</h3>
            <p>See what's available near you instantly.</p>
          </div>
          <div className="feature-box">
            <h3>🔒 Secure & Reliable</h3>
            <p>Your data and vehicles are safe with us.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: support@cityparking.com</p>
        <p>Phone: +263 77 123 4567</p>
        <p>Location: Harare, Zimbabwe</p>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} City Parking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
