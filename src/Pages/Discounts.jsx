import React from 'react';

const Discounts = () => {
  const discounts = [
    {
      title: 'Weekend Special',
      desc: 'Get 50% off when you book parking for Saturdays and Sundays!',
      code: 'WEEKEND50',
      status: 'available',
    },
    {
      title: 'Loyalty Bonus',
      desc: 'Book 5 times and get your 6th booking free!',
      code: 'LOYAL6FREE',
      status: 'unavailable',
    },
    {
      title: 'First-Time Discount',
      desc: 'New to Easy Parking? Use this code to get 30% off your first booking.',
      code: 'WELCOME30',
      status: 'available',
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '3rem 1rem',
      backgroundColor: '#f1f5f9',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
        padding: '2.5rem',
        boxSizing: 'border-box'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          color: '#2563eb',
          fontWeight: '800',
          marginBottom: '1rem'
        }}>
          🎉 Parking Discounts & Promo Deals
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#475569',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
          lineHeight: '1.6'
        }}>
          Save more with our latest offers! Check out what's available for you.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {discounts.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#eff6ff',
                borderLeft: '6px solid #2563eb',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              }}
            >
              <div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#1d4ed8',
                  marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#334155',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  {item.desc}
                </p>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem'
              }}>
                <span
                  style={{
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    userSelect: 'all'
                  }}
                  title="Click to copy code"
                  onClick={e => {
                    navigator.clipboard.writeText(item.code);
                    e.currentTarget.textContent = 'Code Copied!';
                    setTimeout(() => {
                      e.currentTarget.textContent = `Use Code: ${item.code}`;
                    }, 1500);
                  }}
                >
                  Use Code: {item.code}
                </span>

                <button
                  disabled={item.status !== 'available'}
                  style={{
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    cursor: item.status === 'available' ? 'pointer' : 'not-allowed',
                    backgroundColor: item.status === 'available' ? '#22c55e' : '#ef4444',
                    color: '#fff',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  {item.status === 'available' ? 'Available' : 'Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discounts;
