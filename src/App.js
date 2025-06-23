import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import Navbar from './Components/Navbar';
import  './App.css'
import ParkingSpots from './Pages/ParkingSpots';
import 'leaflet/dist/leaflet.css';

const App = () => (
  <Router>
    <Navbar />
    <AppRoutes />
  </Router>
);

export default App;
