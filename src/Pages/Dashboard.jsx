import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome back! Here’s your parking dashboard.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Your Bookings</h2>
        <p>You have no bookings yet.</p>
        {/* Later you can map and list bookings here */}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Available Parking Spots</h2>
        <p>Browse spots near you and make a booking.</p>
        {/* Later you can add a list or map of spots */}
      </section>

      <button 
        style={{ marginTop: '2rem', padding: '0.5rem 1rem' }}
        onClick={() => alert('Logout functionality coming soon!')}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
