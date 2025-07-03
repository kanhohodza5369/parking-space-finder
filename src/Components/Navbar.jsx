import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';  // Import car icon

const HomeNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>
        <FaCar size={28} color="#1e3a8a" /> {/* Car icon replaces text */}
      </Link>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/pricing" style={styles.link}>Pricing</Link>
        <Link to="/book-parking" style={styles.link}>Book Parking</Link>
        <Link to="/login" style={styles.getStarted}>Get Started</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#ffffff',
    padding: '16px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#1f2937', // dark gray
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  getStarted: {
    textDecoration: 'none',
    backgroundColor: '#2563eb', // blue
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default HomeNavbar;
