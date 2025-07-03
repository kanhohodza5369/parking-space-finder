// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Navbar from './Components/Navbar'; // ✅ updated name
import './App.css';
import 'leaflet/dist/leaflet.css';

const AppContent = () => {
  const location = useLocation();

  // ✅ Hide navbar only on /dashboard
  const hideNavbar = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

