// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import ParkingSpots from '../Pages/ParkingSpots'; // ✅ New import

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/parking-spots" element={<ParkingSpots />} /> {/* ✅ New route */}
  </Routes>
);

export default AppRoutes;
