import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Pricing from '../Pages/Pricing';
import ParkingSpots from '../Pages/ParkingSpots';
import BookParking from '../Pages/BookParking';
import Login from '../Pages/Login';
import AgentPage from '../Pages/AgentPage';

import UserDashboard from '../Pages/UserDashboard';
import AgentDashboard from '../Pages/AgentDashboard';
import MyBookings from '../Pages/MyBookings';  // <-- Import MyBookings here

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/parking-spots" element={<ParkingSpots />} />
      <Route path="/book-parking" element={<BookParking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/agent" element={<AgentPage />} />

      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/agent-dashboard" element={<AgentDashboard />} />
      <Route path="/my-bookings" element={<MyBookings />} />  {/* <-- Added route */}
    </Routes>
  );
};

export default AppRoutes;
