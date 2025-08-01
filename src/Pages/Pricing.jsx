import React from 'react';

const HowPricingWorks = () => {
  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        marginTop: '0', // Optional to force no space above
      }}
    >
      <div
        style={{
          marginTop: '40px', // Push content down a bit from the top
          maxWidth: '700px',
          width: '100%',
          boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          borderRadius: '16px',
          backgroundColor: '#ffffff',
          overflow: 'hidden',
          animation: 'fadeIn 1s ease forwards',
          padding: '3rem',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#2563eb',
            marginBottom: '1.5rem',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          How Pricing and Negotiation Work
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6', color: '#374151' }}>
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

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            div[style*="padding: 3rem"] {
              padding: 2rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HowPricingWorks;
