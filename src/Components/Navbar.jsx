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
        {/* Removed Book Parking and Get Started */}
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
  // Removed getStarted style since no longer used
};

export default HomeNavbar;
