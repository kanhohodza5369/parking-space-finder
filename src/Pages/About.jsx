// src/Pages/About.jsx
import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    lineHeight: '1.6',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const headingStyle = {
    color: '#007bff',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    marginBottom: '1rem',
    fontSize: '16px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About City Parking</h1>
      <p style={paragraphStyle}>
        City Parking is a smart parking management system created to help drivers easily find and book parking spaces across Harare.
        Our mission is to reduce traffic, save time, and provide a seamless parking experience for everyone.
      </p>
      <p style={paragraphStyle}>
        We offer real-time parking spot information, secure booking options, and convenient payment systems.
        Whether you're visiting the CBD, Avondale, or Mbare — City Parking has you covered.
      </p>
    </div>
  );
};

export default About;
