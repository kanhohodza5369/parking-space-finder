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
    },
    {
      icon: 'mdi:map-marker-check-outline',
      title: 'Live Map Tracking',
      description: 'View and navigate to available parking around you.',
    },
    {
      icon: 'mdi:shield-lock-outline',
      title: 'Trusted & Secure',
      description: 'All transactions and data are protected with encryption.',
    },
    {
      icon: 'mdi:credit-card-fast-outline',
      title: 'Multiple Payment Options',
      description: 'Pay via EcoCash, bank card, or cash at your convenience.',
    },
    {
      icon: 'mdi:bell-outline',
      title: 'Smart Reminders',
      description: 'Get alerts when your parking time is about to expire.',
    },
    {
      icon: 'mdi:headset',
      title: '24/7 Customer Help',
      description: 'We’re always here to assist with any issues you face.',
    },
  ];

  const stats = [
    { value: '50,000+', label: 'Active Users' },
    { value: '95%', label: 'Satisfaction Rate' },
    { value: '15+', label: 'Cities Covered' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      backgroundColor: '#0a192f', 
      color: '#e6f1ff',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 5%',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(10, 25, 47, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(100, 255, 218, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: 40,
            height: 40,
            backgroundColor: '#64ffda',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 12
          }}>
            <Icon icon="mdi:parking" style={{ color: '#0a192f', fontSize: 24 }} />
          </div>
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '700',
            background: 'linear-gradient(90deg, #64ffda, #5eead4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          Park Smart
          </h1>
        </div>
        
        <div style={{ display: 'flex', gap: '32px' }}>
          <a href="#" style={{ color: '#ccd6f6', textDecoration: 'none', fontWeight: 500 }}>Features</a>
          <a href="#" style={{ color: '#ccd6f6', textDecoration: 'none', fontWeight: 500 }}>Cities</a>
          <a href="#" style={{ color: '#ccd6f6', textDecoration: 'none', fontWeight: 500 }}>Pricing</a>
          <a href="#" style={{ color: '#ccd6f6', textDecoration: 'none', fontWeight: 500 }}>Support</a>
        </div>
        
        <button 
          onClick={handleGetStarted}
          style={{
            backgroundColor: 'transparent',
            color: '#64ffda',
            fontWeight: '600',
            fontSize: '1rem',
            padding: '10px 24px',
            borderRadius: '4px',
            border: '1px solid #64ffda',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          padding: '120px 5% 80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0) 70%)',
          zIndex: 0
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(100, 255, 218, 0.1)',
            color: '#64ffda',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '24px'
          }}>
            PARKING MADE SIMPLE
          </div>
          
          <h1
            style={{
              fontWeight: '800',
              fontSize: '3.5rem',
              lineHeight: 1.1,
              margin: '0 auto 24px',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(90deg, #e6f1ff, #a8b2d1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Stress-Free Parking <br/>in Your City
          </h1>
          
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: '400',
              maxWidth: '600px',
              margin: '0 auto 48px',
              color: '#a8b2d1',
              lineHeight: 1.6,
            }}
          >
            Find and reserve parking spots instantly with real-time availability. Save time, avoid stress, and enjoy seamless parking with our advanced booking system.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button
              onClick={handleGetStarted}
              style={{
                backgroundColor: '#64ffda',
                color: '#0a192f',
                fontWeight: '700',
                fontSize: '1.125rem',
                padding: '16px 40px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 14px rgba(100, 255, 218, 0.4)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(100, 255, 218, 0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(100, 255, 218, 0.4)';
              }}
            >
              Get Started
              <Icon icon="mdi:arrow-right-bold" style={{ fontSize: '24px' }} />
            </button>
            
            <button
              style={{
                backgroundColor: 'transparent',
                color: '#64ffda',
                fontWeight: '600',
                fontSize: '1.125rem',
                padding: '16px 32px',
                borderRadius: '4px',
                border: '1px solid #64ffda',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '80px 5%',
        backgroundColor: 'rgba(17, 34, 64, 0.5)',
        margin: '40px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(23, 42, 76, 0.7) 0%, rgba(10, 25, 47, 0.3) 100%)',
          zIndex: 0
        }}></div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#64ffda',
                marginBottom: '8px'
              }}>{stat.value}</div>
              <div style={{
                fontSize: '1rem',
                color: '#ccd6f6',
                fontWeight: '500'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          padding: '80px 5%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            backgroundColor: '#64ffda',
            borderRadius: '2px'
          }}></div>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '16px',
            background: 'linear-gradient(90deg, #e6f1ff, #a8b2d1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Why Choose Park Smart
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#8892b0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
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
          {features.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#112240',
                borderRadius: '8px',
                padding: '32px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.1)';
              }}
            >
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.05) 0%, transparent 100%)',
                zIndex: 0
              }}></div>
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '60px',
                  height: '60px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Icon icon={icon} style={{ fontSize: '32px', color: '#64ffda' }} />
                </div>
                
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600', 
                  marginBottom: '16px',
                  color: '#e6f1ff'
                }}>
                  {title}
                </h3>
                <p style={{ 
                  color: '#a8b2d1', 
                  fontSize: '1rem', 
                  lineHeight: 1.7 
                }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Preview Section */}
      <section style={{
        padding: '120px 5%',
        backgroundColor: 'rgba(17, 34, 64, 0.5)',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '80px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(23, 42, 76, 0.7) 0%, rgba(10, 25, 47, 0.3) 100%)',
          zIndex: 0
        }}></div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: '16px',
            textAlign: 'center',
            background: 'linear-gradient(90deg, #e6f1ff, #a8b2d1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            The Complete Parking Solution
          </h2>
          
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#8892b0',
            maxWidth: '600px',
            textAlign: 'center',
            marginBottom: '60px',
            lineHeight: 1.6
          }}>
            Download our app to access all features on the go and enjoy seamless parking wherever you are.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '60px'
          }}>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '16px 28px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#e6f1ff',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}>
              <Icon icon="mdi:apple" style={{ fontSize: '28px' }} />
              <div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Download on the</div>
                <div>App Store</div>
              </div>
            </button>
            
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '16px 28px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#e6f1ff',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}>
              <Icon icon="mdi:google-play" style={{ fontSize: '24px' }} />
              <div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>GET IT ON</div>
                <div>Google Play</div>
              </div>
            </button>
          </div>
          
          <div style={{
            width: '100%',
            maxWidth: '800px',
            height: '400px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(100, 255, 218, 0.2)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1a2c4d 0%, #0a192f 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64ffda',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: '16px'
              }}>
                <Icon icon="mdi:cellphone" style={{ fontSize: '60px' }} />
                <div>App Interface Preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#0a192f',
          color: '#8892b0',
          padding: '80px 5% 40px',
          position: 'relative',
          borderTop: '1px solid rgba(100, 255, 218, 0.1)'
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto 60px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{
                width: 40,
                height: 40,
                backgroundColor: '#64ffda',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 12
              }}>
                <Icon icon="mdi:parking" style={{ color: '#0a192f', fontSize: 24 }} />
              </div>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700',
                color: '#e6f1ff'
              }}>
                EasyPark
              </h2>
            </div>
            <p style={{ 
              lineHeight: 1.7,
              marginBottom: '24px'
            }}>
              Making parking simple, efficient, and stress-free for everyone.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['mdi:twitter', 'mdi:facebook', 'mdi:instagram', 'mdi:linkedin'].map((icon, i) => (
                <div key={i} style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#112240',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#64ffda';
                  e.currentTarget.style.color = '#0a192f';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#112240';
                  e.currentTarget.style.color = '#e6f1ff';
                }}>
                  <Icon icon={icon} style={{ fontSize: '20px' }} />
                </div>
              ))}
            </div>
          </div>
          
          {['Product', 'Resources', 'Company', 'Legal'].map((category, i) => (
            <div key={i}>
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '600',
                color: '#e6f1ff',
                marginBottom: '24px'
              }}>
                {category}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Features', 'Solutions', 'Pricing', 'Guides', 'Blog', 'Support'].slice(i*2, i*2+2).map((item, j) => (
                  <li key={j} style={{ marginBottom: '16px' }}>
                    <a href="#" style={{ 
                      color: '#8892b0', 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#64ffda';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#8892b0';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          paddingTop: '40px',
          borderTop: '1px solid rgba(136, 146, 176, 0.2)',
          textAlign: 'center',
          fontSize: '0.875rem'
        }}>
          <p>© {new Date().getFullYear()} EasyPark. All rights reserved.</p>
          <p style={{ marginTop: '8px', color: '#8892b0' }}>
            Designed with love by the Park Smart team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;