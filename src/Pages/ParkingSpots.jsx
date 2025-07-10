// src/Components/ParkingSpots.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

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
    <div style={{ display: 'flex', height: '85vh', backgroundColor: '#f9fafb' }}>
      {/* Map View (Smaller) */}
      <div style={{ flex: 2.2 }}>
        <MapContainer
          center={[-17.8252, 31.0335]}
          zoom={14}
          scrollWheelZoom
          style={{ height: '100%', width: '100%', borderRadius: '0 12px 12px 0' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {parkingSpots.map(spot => (
            <Marker
              key={spot.id}
              position={spot.position}
              eventHandlers={isAgent ? { click: () => toggleAvailability(spot.id) } : {}}
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

      {/* Sidebar / Booking Panel (Wider) */}
      <div
        style={{
          flex: 1.8,
          padding: '30px',
          backgroundColor: '#ffffff',
          borderLeft: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.05)',
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon icon="mdi:car" style={{ fontSize: '28px', color: '#3b82f6' }} />
          Book a Parking Spot
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <select
            value={selectedSpotId}
            onChange={e => setSelectedSpotId(e.target.value)}
            aria-label="Select parking spot"
            style={{
              padding: '12px 16px',
              borderRadius: '10px',
              border: '1px solid #cbd5e1',
              fontSize: '15px',
              backgroundColor: '#f8fafc',
            }}
          >
            <option value="">-- Select a parking spot --</option>
            {parkingSpots.map(spot => (
              <option key={spot.id} value={spot.id} disabled={!spot.available}>
                {spot.name} {spot.available ? '' : '(Full)'}
              </option>
            ))}
          </select>

          <button
            onClick={handleBook}
            disabled={!selectedSpotId}
            aria-label="Book selected parking spot"
            style={{
              padding: '14px 18px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 600,
              cursor: selectedSpotId ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.3s',
            }}
          >
            <Icon icon="mdi:car-arrow-right" style={{ fontSize: '20px' }} />
            Book Now
          </button>
        </div>

        {/* List of Spots */}
        <div style={{ flex: 1, overflowY: 'auto', marginTop: '10px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#334155', marginBottom: '10px' }}>
            Available Parking Spots
          </h3>
          {parkingSpots.map(spot => (
            <div
              key={spot.id}
              style={{
                backgroundColor: '#f1f5f9',
                padding: '14px 16px',
                borderRadius: '12px',
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 1px 5px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#1e293b' }}>
                <Icon icon="mdi:map-marker" style={{ fontSize: '20px', color: '#3b82f6' }} />
                {spot.name}
              </div>
              <div
                style={{
                  color: spot.available ? '#16a34a' : '#dc2626',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                }}
              >
                <Icon
                  icon={spot.available ? "mdi:check-circle" : "mdi:close-circle"}
                  style={{ fontSize: '18px' }}
                />
                {spot.available ? 'Available' : 'Full'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingSpots;
