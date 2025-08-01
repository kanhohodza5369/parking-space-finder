
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
    {
      icon: 'mdi:history',
      title: 'Parking History',
      description: 'View your past bookings and payments anytime.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/time-machine.png',
    },
    {
      icon: 'mdi:share-variant',
      title: 'Parking Spot Sharing',
      description: 'Share or sublet your reserved parking spot with others.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/share.png',
    },
    {
      icon: 'mdi:star-circle-outline',
      title: 'Ratings & Reviews',
      description: 'Rate and review parking spots for the community.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/star.png',
    },
    {
      icon: 'mdi:tag-heart',
      title: 'Discounts & Promotions',
      description: 'Enjoy special offers and promo codes.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/discount.png',
    },
    {
      icon: 'mdi:map-directions',
      title: 'In-app Navigation Assistance',
      description: 'Get step-by-step directions to your reserved parking spot.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/navigation.png',
    },
    {
      icon: 'mdi:wheelchair-accessibility',
      title: 'Accessible Spots',
      description: 'Locate parking designed for disabled users.',
      image: 'https://img.icons8.com/ios-filled/100/22c55e/wheelchair.png',
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: '#1e293b', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      
      {/* Hero Section - untouched */}
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

      {/* Features Section with relevant images */}
      <section
        style={{
          backgroundColor: '#f9fafb',
          borderRadius: '24px',
          padding: '40px 20px',  // Reduced padding to bring it up
          marginTop: '20px',     // Reduced margin top to bring it closer
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
            Why Choose Easy Parking
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#475569' }}>
            Everything you need for a smart, stress-free parking experience.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {features.map(({ icon, title, description, image }, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderLeft: '6px solid #22c55e',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
                gap: '16px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.05)';
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ width: 80, height: 80, borderRadius: '12px', objectFit: 'contain', flexShrink: 0 }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <Icon icon={icon} style={{ fontSize: '28px', color: '#22c55e' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginLeft: '10px', color: '#1e293b' }}>
                    {title}
                  </h3>
                </div>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with subtle background image */}
      <footer
        style={{
          backgroundColor: '#1e293b',
          color: 'white',
          textAlign: 'center',
          padding: '48px 20px',
          fontSize: '14px',
          letterSpacing: '0.05em',
          fontWeight: '500',
          userSelect: 'none',
          marginTop: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background image, low opacity */}
        <img
          src="https://images.unsplash.com/photo-1508051123996-69f8caf4891e?auto=format&fit=crop&w=1200&q=80"
          alt="parking lot"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.08,
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
        {/* Footer content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p>© {new Date().getFullYear()} Easy Parking. All rights reserved.</p>
          <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#94a3b8' }}>
            Designed with care by your Easy Parking team.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;