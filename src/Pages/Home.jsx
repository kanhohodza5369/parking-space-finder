import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  const features = [
    {
      icon: 'mdi:check-circle-outline',
      title: 'Instant Booking',
      description: 'Quickly reserve parking spots with real-time availability.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/calendar.png',
    },
    {
      icon: 'mdi:map-marker-check-outline',
      title: 'Live Map Tracking',
      description: 'View and navigate to available parking around you.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/map-marker.png',
    },
    {
      icon: 'mdi:shield-lock-outline',
      title: 'Trusted & Secure',
      description: 'All transactions and data are protected with encryption.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/lock--v1.png',
    },
    {
      icon: 'mdi:credit-card-fast-outline',
      title: 'Multiple Payment Options',
      description: 'Pay via EcoCash, bank card, or cash at your convenience.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/money.png',
    },
    {
      icon: 'mdi:bell-outline',
      title: 'Smart Reminders',
      description: 'Get alerts when your parking time is about to expire.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/alarm.png',
    },
    {
      icon: 'mdi:headset',
      title: '24/7 Customer Help',
      description: 'We’re always here to assist with any issues you face.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/headset.png',
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#f1f5f9', backgroundColor: '#0f172a', minHeight: '100vh' }}>
      
      {/* Hero Section with Parked Car Background */}
      <section
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '120px 20px 100px',
          textAlign: 'center',
          position: 'relative',
          borderBottomLeftRadius: '60px',
          borderBottomRightRadius: '60px',
        }}
      >
        {/* Overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderBottomLeftRadius: '60px',
          borderBottomRightRadius: '60px',
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontWeight: '900',
            fontSize: '3.75rem',
            lineHeight: 1.1,
            maxWidth: 650,
            margin: '0 auto 24px',
            letterSpacing: '-0.03em',
          }}>
            Park Smart
          </h1>
          <p style={{
            fontSize: '1.375rem',
            fontWeight: '500',
            maxWidth: 480,
            margin: '0 auto 48px',
            opacity: 0.9,
            lineHeight: 1.6,
          }}>
            Find parking spots easily in your city. Save time and avoid stress with our real-time availability and easy booking system.
          </p>
          <button
            onClick={handleGetStarted}
            style={{
              backgroundColor: '#22c55e',
              color: '#fff',
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
              e.currentTarget.style.backgroundColor = '#16a34a';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#22c55e';
            }}
          >
            Get Started
            <Icon icon="mdi:arrow-right-bold" style={{ fontSize: '24px' }} />
          </button>
        </div>
      </section>

      {/* Features Section - Restructured Cards */}
      <section style={{
        backgroundColor: '#0f172a',
        borderRadius: '24px',
        padding: '60px 20px',
        maxWidth: 1200,
        margin: '0 auto',
        marginTop: '-80px',
        color: '#f1f5f9'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: '700', marginBottom: '16px' }}>
            Why Choose Easy Parking
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#cbd5e1' }}>
            Everything you need for a smart, stress-free parking experience.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px'
        }}>
          {features.map(({ icon, title, description, image }, idx) => (
            <div key={idx} style={{
              backgroundColor: '#1e293b',
              borderRadius: '20px',
              width: '280px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
              }}
            >
              <img src={image} alt={title} style={{ width: 60, height: 60, marginBottom: '20px' }} />
              <Icon icon={icon} style={{ fontSize: '32px', color: '#22c55e', marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px', textAlign: 'center' }}>{title}</h3>
              <p style={{ textAlign: 'center', color: '#cbd5e1' }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0f172a',
        color: '#cbd5e1',
        textAlign: 'center',
        padding: '48px 20px',
        fontSize: '14px',
        letterSpacing: '0.05em',
        fontWeight: '500',
        userSelect: 'none',
        marginTop: '60px',
      }}>
        <p>© {new Date().getFullYear()} Easy Parking. All rights reserved.</p>
        <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#94a3b8' }}>
          Designed with care by your Park Smart team.
        </p>
      </footer>
    </div>
  );
};

export default Home;
