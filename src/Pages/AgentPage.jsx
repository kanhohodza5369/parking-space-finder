import React, { useState } from 'react';
import ParkingSpotsMap from './ParkingSpots'; // map component, similar to your ParkingSpots.jsx
import AgentPage from './AgentPage'; // your current agent list dashboard component

const AgentDashboard = () => {
  const [parkingData, setParkingData] = useState([
    { id: 1, location: 'Samora Ave', position: [-17.8275, 31.0447], status: 'Available' },
    { id: 2, location: 'First Street', position: [-17.8250, 31.0400], status: 'Full' },
  ]);

  const toggleStatus = (id) => {
    setParkingData(data =>
      data.map(spot =>
        spot.id === id
          ? { ...spot, status: spot.status === 'Available' ? 'Full' : 'Available' }
          : spot
      )
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Agent List */}
      <div className="md:w-1/3">
        <AgentPage parkingData={parkingData} toggleStatus={toggleStatus} />
      </div>

      {/* Map Control */}
      <div className="md:w-2/3" style={{ height: '600px' }}>
        <ParkingSpotsMap parkingData={parkingData} toggleStatus={toggleStatus} />
      </div>
    </div>
  );
};

export default AgentDashboard;
