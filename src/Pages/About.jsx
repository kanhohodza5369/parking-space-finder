import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const About = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Happy driver with car keys',
    },
    {
      url: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Smiling woman next to parked car',
    },
    {
      url: 'https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Driver happily getting into parked car',
    },
    {
      url: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
      caption: 'Satisfied driver ready to go',
    }
  ];

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
          maxWidth: 1000,
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
          borderRadius: 16,
          overflow: 'hidden',
          animation: 'fadeIn 1s ease forwards',
        }}
      >
        {/* Carousel Section */}
        <Carousel
          autoPlay
          infiniteLoop
          interval={6000}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          dynamicHeight={false}
        >
          {images.map((img, i) => (
            <div key={i}>
              <img
                src={img.url}
                alt={img.caption}
                style={{ height: '500px', objectFit: 'cover', width: '100%' }}
              />
              <p className="legend">{img.caption}</p>
            </div>
          ))}
        </Carousel>

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

          @media (max-width: 768px) {
            .legend {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
