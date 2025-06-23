import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // or your CSS file

const HomeNavbar = () => {
  return (
    <nav className="home-navbar">
      <Link to="/" className="navbar-logo">City Parking</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/pricing" className="navbar-link">Pricing</Link>
        <Link to="/parking-spots" className="navbar-link">Parking Spots</Link> {/* Added this */}
        <Link to="/book-parking" className="navbar-link">Book Parking</Link>
        <Link to="/login" className="navbar-getstarted">Get Started</Link> {/* Navigates to login */}
      </div>
    </nav>
  );
};

export default HomeNavbar;
