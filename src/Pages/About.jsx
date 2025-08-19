import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const About = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Change to '/dashboard' if you want to go directly there
  };

  return (
    <div
      style={{
        backgroundColor: '#0f172a',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '3rem 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        marginTop: '2rem',
        position: 'relative',
        overflow: 'hidden',
        color: '#f1f5f9',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2017-07/large_watermarked/170711_C_140_HD_1080p_preview.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2017-07/large_watermarked/170711_C_140_HD_1080p_preview.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(to bottom, rgba(15,23,42,0.6), rgba(15,23,42,0.8))',
          zIndex: 1,
        }}
      ></div>

      {/* Content Card */}
      <div
        style={{
          maxWidth: 800,
          width: '100%',
          backgroundColor: 'rgba(30,41,59,0.95)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
          borderRadius: 16,
          overflow: 'hidden',
          padding: '2rem 1.5rem',
          zIndex: 2,
          animation: 'cardFadeIn 1s ease forwards',
        }}
      >
        <h1
          style={{
            fontSize: '2.2rem',
            color: '#22c55e',
            fontWeight: '700',
            animation: 'fadeInUp 1s ease forwards',
          }}
        >
          About City Parking
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            animation: 'fadeInUp 1.2s ease forwards',
          }}
        >
          City Parking is a smart parking management system built to help drivers in Harare easily
          find, book, and pay for parking spots. Real-time info, easy payment, less stress.
        </p>
        <p
          style={{
            fontSize: '1rem',
            color: '#cbd5e1',
            lineHeight: 1.6,
            animation: 'fadeInUp 1.4s ease forwards',
          }}
        >
          Our mission is to reduce congestion, save drivers time, and transform city navigation.
        </p>
        <p
          style={{
            fontSize: '0.95rem',
            color: '#94a3b8',
            fontStyle: 'italic',
            animation: 'fadeInUp 1.6s ease forwards',
          }}
        >
          Join thousands of smart drivers who trust City Parking every day 🚗
        </p>

        {/* Call-to-action */}
        <button
          onClick={handleGetStarted}
          style={{
            marginTop: '1.5rem',
            backgroundColor: '#22c55e',
            color: '#0f172a',
            fontWeight: '700',
            fontSize: '1rem',
            padding: '0.8rem 2rem',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(34,197,94,0.4)',
            transition: 'all 0.3s ease',
            animation: 'fadeInUp 1.8s ease forwards',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#16a34a';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#22c55e';
            e.currentTarget.style.color = '#0f172a';
          }}
        >
          Book a Spot Now <Icon icon="mdi:arrow-right-bold" />
        </button>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes cardFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 480px) {
            h1 { font-size: 1.5rem !important; }
            p { font-size: 0.9rem !important; }
          }
          @media (min-width: 481px) and (max-width: 768px) {
            h1 { font-size: 1.8rem !important; }
            p { font-size: 1rem !important; }
          }
          @media (min-width: 1200px) {
            h1 { font-size: 2.5rem !important; }
            p { font-size: 1.1rem !important; }
          }
        `}
      </style>
    </div>
  );
};

export default About;
