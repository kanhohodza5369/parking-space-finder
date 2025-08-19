import React from 'react';
import { useNavigate } from 'react-router-dom';

const HowPricingWorks = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/login'); // Or '/dashboard'
  };

  return (
    <div
      style={{
        backgroundColor: '#0f172a',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Push content to the top
        padding: '2rem 1rem', // Top padding instead of centering
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#f1f5f9',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#1e293b',
          borderRadius: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.45)',
          padding: '1.5rem 1.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          animation: 'fadeIn 1s ease forwards',
        }}
      >
        <h1
          style={{
            fontSize: '1.8rem',
            color: '#22c55e',
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          How Pricing & Negotiation Work
        </h1>

        <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#cbd5e1' }}>
          Agents set the initial parking prices based on zones and availability. Drivers can <strong>negotiate directly</strong> 
          with agents to propose their own price.
        </p>

        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
          {[
            'Agents post their standard rates for parking zones.',
            'Drivers can propose a price they are willing to pay.',
            'Agents review and accept, reject, or counteroffer.',
            'Once agreed, booking confirms at the negotiated price.',
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '0.9rem',
                gap: '0.6rem',
                color: '#cbd5e1',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#22c55e"
                style={{ width: 18, height: 18 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: '0.9rem', lineHeight: 1.4, color: '#94a3b8' }}>
          This negotiation model encourages transparency and flexibility, while allowing agents to
          manage demand and optimize parking availability.
        </p>

        {/* Join Us Button */}
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <button
            onClick={handleJoinUs}
            style={{
              backgroundColor: '#22c55e',
              color: '#0f172a',
              fontWeight: '700',
              fontSize: '0.95rem',
              padding: '0.6rem 1.8rem',
              borderRadius: '40px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 5px 15px rgba(34,197,94,0.4)',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#16a34a';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#22c55e';
              e.currentTarget.style.color = '#0f172a';
            }}
          >
            Join Us Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#0f172a"
              style={{ width: 18, height: 18 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 768px) {
            h1 { font-size: 1.5rem !important; }
            p, li { font-size: 0.85rem !important; }
            div[style*="padding: 1.5rem"] { padding: 1rem !important; }
          }
        `}
      </style>
    </div>
  );
};

export default HowPricingWorks;
