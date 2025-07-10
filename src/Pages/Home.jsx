import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1e293b', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
          color: 'white',
          padding: '100px 20px 80px',
          textAlign: 'center',
          borderBottomLeftRadius: '60px',
          borderBottomRightRadius: '60px',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
        }}
      >
        <h1
          style={{
            fontWeight: '900',
            fontSize: '3.75rem',
            lineHeight: 1.1,
            maxWidth: 650,
            margin: '0 auto 24px',
            letterSpacing: '-0.03em',
          }}
        >
          Welcome to Easy Parking
        </h1>
        <p
          style={{
            fontSize: '1.375rem',
            fontWeight: '500',
            maxWidth: 480,
            margin: '0 auto 48px',
            opacity: 0.9,
            lineHeight: 1.6,
          }}
        >
          Find parking spots easily in your city. Save time and avoid stress with our real-time availability and easy booking system.
        </p>
        <button
          onClick={handleGetStarted}
          style={{
            backgroundColor: '#ffffff',
            color: '#10b981',
            fontWeight: '700',
            fontSize: '1.125rem',
            padding: '16px 56px',
            borderRadius: '40px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#0f766e';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#10b981';
          }}
        >
          Get Started
          <Icon icon="mdi:arrow-right-bold" style={{ fontSize: '24px' }} />
        </button>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: '80px 20px',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
        }}
      >
        {[
          {
            icon: 'mdi:car-arrow-right',
            title: 'Easy Booking',
            description: 'Reserve your parking spot in just a few clicks.',
          },
          {
            icon: 'mdi:map-marker-radius',
            title: 'Real-Time Location',
            description: "See what's available near you instantly.",
          },
          {
            icon: 'mdi:shield-check',
            title: 'Secure & Reliable',
            description: 'Your data and vehicles are safe with us.',
          },
        ].map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '40px 32px',
              boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.08)';
            }}
          >
            <Icon icon={icon} style={{ fontSize: '48px', color: '#10b981', marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: '#1e293b' }}>
              {title}
            </h3>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>{description}</p>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section
        style={{
          backgroundColor: 'white',
          padding: '60px 20px',
          maxWidth: 800,
          margin: '0 auto 80px',
          borderRadius: '24px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '24px', color: '#1e293b' }}>
          Contact Us
        </h2>
        <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '12px' }}>
          <strong>Email:</strong> support@cityparking.com
        </p>
        <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '12px' }}>
          <strong>Phone:</strong> +263 77 123 4567
        </p>
        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
          <strong>Location:</strong> Harare, Zimbabwe
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#1e293b',
          color: 'white',
          textAlign: 'center',
          padding: '24px 20px',
          fontSize: '14px',
          letterSpacing: '0.05em',
          fontWeight: '500',
          userSelect: 'none',
        }}
      >
        <p>© {new Date().getFullYear()} City Parking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
