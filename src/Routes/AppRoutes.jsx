import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import ParkingSpots from '../Pages/ParkingSpots';
import About from '../Pages/About';
import Pricing from '../Pages/Pricing';
import BookParking from '../Pages/BookParking'; // ← Add this import

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/parking-spots" element={<ParkingSpots />} />
    <Route path="/about" element={<About />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/book-parking" element={<BookParking />} /> {/* ← Add this route */}
  </Routes>
);

export default AppRoutes;


