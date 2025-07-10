// src/Pages/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ParkingSpots from './ParkingSpots';
import MyBookings from './MyBookings';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Full list of Harare areas
const initialAvailability = [
  { location: 'CBD Zone A', available: 75 },
  { location: 'Avondale', available: 62 },
  { location: 'Eastlea', available: 50 },
  { location: 'Borrowdale', available: 80 },
  { location: 'Greencroft', available: 40 },
  { location: 'Highlands', available: 55 },
  { location: 'Mabelreign', available: 60 },
  { location: 'Westgate', available: 73 },
  { location: 'Mount Pleasant', available: 58 },
  { location: 'Msasa', available: 42 },
  { location: 'Belgravia', available: 66 },
  { location: 'Warren Park', available: 38 },
];

const UserDashboard = ({ onLogout, user = { name: "Driver" } }) => {
  const [view, setView] = useState('dashboard');
  const [availabilityData, setAvailabilityData] = useState(initialAvailability);

  // Simulate live updates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const updated = availabilityData.map(loc => ({
        ...loc,
        available: Math.max(0, Math.min(100, loc.available + (Math.random() * 20 - 10))),
      }));
      setAvailabilityData(updated);
    }, 3000);

    return () => clearInterval(interval);
  }, [availabilityData]);

  const styles = {
    layout: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#f9fafb',
      color: '#0f172a',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#1e293b',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1.2rem',
      gap: '1rem',
    },
    sidebarItem: {
      padding: '14px 20px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
    },
    sidebarItemActive: {
      backgroundColor: '#3b82f6',
      color: '#fff',
    },
    mainContent: {
      flex: 1,
      padding: '40px',
    },
    header: {
      fontSize: '26px',
      fontWeight: '700',
      marginBottom: '32px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    chartCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
    },
    chartTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '16px',
    },
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'mdi:view-dashboard-outline', onClick: () => setView('dashboard') },
    { id: 'map', label: 'Find Parking', icon: 'mdi:car-search', onClick: () => setView('map') },
    { id: 'bookings', label: 'My Bookings', icon: 'mdi:calendar-check', onClick: () => setView('bookings') },
    { id: 'logout', label: 'Log Out', icon: 'mdi:logout', onClick: onLogout },
  ];

  const renderDashboard = () => (
    <>
      <div style={styles.header}>
        <Icon icon="mdi:account-circle-outline" style={{ fontSize: '32px' }} />
        Welcome back, {user.name}
      </div>

      <div style={styles.chartCard}>
        <h3 style={styles.chartTitle}>📊 Live Parking Availability by Location</h3>
        <ResponsiveContainer width="100%" height={360}>
          <BarChart
            data={availabilityData}
            margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
          >
            <defs>
              <linearGradient id="availabilityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#34d399" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="location"
              angle={-35}
              textAnchor="end"
              interval={0}
              height={80}
              tick={{ fontSize: 12, fill: "#64748b" }}
            />
            <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(value) => `${Math.round(value)}% Available`} />
            <Bar
              dataKey="available"
              fill="url(#availabilityGradient)"
              radius={[10, 10, 0, 0]}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );

  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        {sidebarItems.map(item => (
          <div
            key={item.id}
            style={{
              ...styles.sidebarItem,
              ...(view === item.id ? styles.sidebarItemActive : {}),
            }}
            onClick={item.onClick}
          >
            <Icon icon={item.icon} />
            {item.label}
          </div>
        ))}
      </aside>

      <main style={styles.mainContent}>
        {view === 'dashboard' && renderDashboard()}
        {view === 'map' && <>
          <button onClick={() => setView('dashboard')} style={{ marginBottom: '20px' }}>
            <Icon icon="mdi:arrow-left" /> Back
          </button>
          <ParkingSpots />
        </>}
        {view === 'bookings' && <>
          <button onClick={() => setView('dashboard')} style={{ marginBottom: '20px' }}>
            <Icon icon="mdi:arrow-left" /> Back
          </button>
          <MyBookings />
        </>}
      </main>
    </div>
  );
};

export default UserDashboard;
