import React from 'react';

const HowPricingWorks = () => {
  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          borderRadius: '16px',
          backgroundColor: '#ffffff',
          overflow: 'hidden',
          animation: 'fadeIn 1s ease forwards',
        }}
      >
        {/* Left image side */}
        <div style={{ flex: '1 1 350px', minWidth: 300, position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Negotiation discussion"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px 0 0 16px',
              display: 'block',
            }}
          />
        </div>

        {/* Right content side */}
        <div
          style={{
            flex: '1 1 500px',
            padding: '3rem 3rem 3rem 2rem',
            color: '#1f2937',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '2.8rem',
              color: '#2563eb',
              marginBottom: '1rem',
              fontWeight: '700',
            }}
          >
            How Pricing and Negotiation Work
          </h1>

          <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            In this app, <strong>agents</strong> set the initial parking prices based on zones and availability.
            Drivers have the opportunity to <strong>negotiate directly</strong> with agents to propose their own price.
          </p>

          <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
            {[
              'Agents post their standard rates for parking zones.',
              'Drivers can propose a price they are willing to pay.',
              'Agents review and accept, reject, or counteroffer.',
              'Once agreed, booking confirms at the negotiated price.',
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.1rem',
                  gap: '0.8rem',
                  color: '#374151',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#2563eb"
                  style={{ width: 24, height: 24, flexShrink: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4b5563' }}>
            This negotiation model encourages transparency and gives drivers flexibility, while allowing agents to
            manage demand effectively and optimize parking availability.
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            div[style*="flex-wrap: wrap"] {
              flex-direction: column;
              border-radius: 16px;
            }
            div[style*="flex: 1 1 350px"] {
              border-radius: 16px 16px 0 0;
            }
            div[style*="flex: 1 1 500px"] {
              padding: 2rem 1.5rem 3rem 1.5rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HowPricingWorks;
