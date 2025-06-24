// src/Pages/ParkingSpots.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Mock parking spots with availability
const parkingSpots = [
  {
    id: 1,
    name: 'Julius Nyerere Way',
    position: [-17.8252, 31.0335],
    available: true,
  },
  {
    id: 2,
    name: 'Samora Machel Ave',
    position: [-17.8275, 31.0447],
    available: false,
  },
  {
    id: 3,
    name: 'Robert Mugabe Rd',
    position: [-17.8231, 31.0301],
    available: true,
  },
];

const ParkingSpots = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[-17.8252, 31.0335]} zoom={14} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {parkingSpots.map(spot => (
          <Marker key={spot.id} position={spot.position}>
            <Popup>
              <strong>{spot.name}</strong><br />
              Status: {spot.available ? '✅ Available' : '❌ Full'}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ParkingSpots;
