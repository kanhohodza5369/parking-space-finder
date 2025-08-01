import React from 'react';

const About = () => {
  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '3rem 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
          borderRadius: 16,
          overflow: 'hidden',
          animation: 'fadeIn 1s ease forwards',
        }}
      >
        {/* Text Section */}
        <div
          style={{
            padding: '2.5rem 2rem',
            color: '#1f2937',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', color: '#2563eb', fontWeight: '700' }}>
            About City Parking
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#374151', lineHeight: 1.7 }}>
            City Parking is a smart parking management system built to help drivers in Harare easily
            find, book, and pay for parking spots. It removes stress from parking by providing real-time
            information and seamless digital payment options.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#374151', lineHeight: 1.7 }}>
            Our mission is to reduce congestion, save drivers time, and transform city navigation. Whether
            you're heading to the CBD, Avondale, or Mbare — we've got a space for you.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#4b5563', fontStyle: 'italic' }}>
            Join thousands of smart drivers who trust City Parking every day 🚗
          </p>
        </div>
      </div>

      {/* Inline CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default About;
