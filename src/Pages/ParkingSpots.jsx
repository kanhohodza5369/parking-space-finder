// src/Components/ParkingSpots.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const initialParkingSpots = [
  { id: 1, name: 'Julius Nyerere Way', position: [-17.8252, 31.0335], available: true },
  { id: 2, name: 'Samora Machel Ave', position: [-17.8275, 31.0447], available: false },
  { id: 3, name: 'Robert Mugabe Rd', position: [-17.8231, 31.0301], available: true },
];

const ParkingSpots = ({ isAgent }) => {
  const [parkingSpots, setParkingSpots] = useState(initialParkingSpots);
  const [selectedSpotId, setSelectedSpotId] = useState('');
  const navigate = useNavigate();

  const toggleAvailability = (id) => {
    setParkingSpots(spots =>
      spots.map(spot =>
        spot.id === id ? { ...spot, available: !spot.available } : spot
      )
    );
  };

  const handleBook = () => {
    if (!selectedSpotId) return;
    const selectedSpot = parkingSpots.find(spot => spot.id === parseInt(selectedSpotId));
    navigate(`/book-parking/${encodeURIComponent(selectedSpot.name)}`);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 2 }}>
        <MapContainer center={[-17.8252, 31.0335]} zoom={14} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {parkingSpots.map(spot => (
            <Marker
              key={spot.id}
              position={spot.position}
              eventHandlers={
                isAgent
                  ? { click: () => toggleAvailability(spot.id) }
                  : {}
              }
            >
              <Popup>
                <strong>{spot.name}</strong><br />
                Status: {spot.available ? '✅ Available' : '❌ Full'}<br />
                {isAgent && <em>(Click to toggle availability)</em>}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f4f4', borderLeft: '1px solid #ccc' }}>
        <h2>📍 Book a Parking Spot</h2>
        <select
          value={selectedSpotId}
          onChange={e => setSelectedSpotId(e.target.value)}
          style={{ display: 'block', width: '100%', margin: '10px 0', padding: '10px' }}
        >
          <option value="">-- Select a parking spot --</option>
          {parkingSpots.map(spot => (
            <option
              key={spot.id}
              value={spot.id}
              disabled={!spot.available}
            >
              {spot.name} {spot.available ? '' : '(Full)'}
            </option>
          ))}
        </select>

        <button
          onClick={handleBook}
          disabled={!selectedSpotId}
          style={{
            padding: '12px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ParkingSpots;
