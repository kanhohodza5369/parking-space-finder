import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to City Parking</h1>
      <p className="home-subtitle">Find parking spots easily in your city.</p>
      <button className="home-button" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
