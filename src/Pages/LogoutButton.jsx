import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user info
    localStorage.removeItem('user');
    // Redirect to login
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '0.4rem 0.8rem',
        backgroundColor: '#ff4d4d',
        color: '#fff',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        fontWeight: '600',
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
