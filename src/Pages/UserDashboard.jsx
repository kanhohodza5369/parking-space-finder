import React, { useState } from 'react';
import { FaSignOutAlt, FaCarAlt, FaHistory, FaClock, FaArrowLeft } from 'react-icons/fa';
import ParkingSpots from './ParkingSpots';
import MyBookings from './MyBookings'; // Import MyBookings

const mockActivity = [
  { id: 1, message: "Booked parking at Harare CBD Zone A", time: "10 minutes ago" },
  { id: 2, message: "Searched for parking near Avondale", time: "2 hours ago" },
  { id: 3, message: "Viewed history of past bookings", time: "Yesterday" },
];

const UserDashboard = ({ onLogout, user = { name: "Driver" } }) => {
  const [logoutHover, setLogoutHover] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showBookings, setShowBookings] = useState(false);

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      padding: '30px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '30px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#111827',
    },
    logoutButton: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: logoutHover ? '#c53030' : '#ef4444',
      color: '#fff',
      padding: '10px 16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '30px',
    },
    card: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#e0f2fe',
      padding: '20px',
      borderRadius: '12px',
      color: '#1e40af',
      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      userSelect: 'none',
    },
    greenCard: {
      backgroundColor: '#dcfce7',
      color: '#166534',
    },
    cardIcon: {
      fontSize: '24px',
      marginRight: '15px',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    cardTitle: {
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '4px',
    },
    cardText: {
      fontSize: '14px',
    },
    activitySection: {
      backgroundColor: '#f9fafb',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    },
    activityTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#111827',
    },
    activityItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '10px',
      color: '#374151',
    },
    activityIcon: {
      marginRight: '10px',
      marginTop: '4px',
      color: '#6b7280',
    },
    activityText: {
      fontSize: '14px',
      marginBottom: '2px',
    },
    activityTime: {
      fontSize: '12px',
      color: '#9ca3af',
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#2563eb',
      color: '#fff',
      padding: '8px 14px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      marginBottom: '20px',
      fontWeight: '600',
      fontSize: '16px',
    },
    backIcon: {
      marginRight: '8px',
    },
  };

  // Back button handler resets views
  const handleBack = () => {
    setShowMap(false);
    setShowBookings(false);
  };

  if (showMap) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <button style={styles.backButton} onClick={handleBack}>
            <FaArrowLeft style={styles.backIcon} /> Back to Dashboard
          </button>
          <ParkingSpots isAgent={false} />
        </div>
      </div>
    );
  }

  if (showBookings) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <button style={styles.backButton} onClick={handleBack}>
            <FaArrowLeft style={styles.backIcon} /> Back to Dashboard
          </button>
          <MyBookings />
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome, {user.name} 🚗</h1>
          <button
            onClick={onLogout}
            style={styles.logoutButton}
            onMouseEnter={() => setLogoutHover(true)}
            onMouseLeave={() => setLogoutHover(false)}
          >
            <FaSignOutAlt style={{ marginRight: '8px' }} />
            Log Out
          </button>
        </div>

        {/* Action Cards */}
        <div style={styles.cardsGrid}>
          <div style={styles.card} onClick={() => setShowMap(true)}>
            <FaCarAlt style={styles.cardIcon} />
            <div style={styles.cardContent}>
              <span style={styles.cardTitle}>Find Parking</span>
              <span style={styles.cardText}>Search for available spots nearby.</span>
            </div>
          </div>

          <div style={{ ...styles.card, ...styles.greenCard }} onClick={() => setShowBookings(true)}>
            <FaHistory style={styles.cardIcon} />
            <div style={styles.cardContent}>
              <span style={styles.cardTitle}>My Bookings</span>
              <span style={styles.cardText}>View your recent parking history.</span>
            </div>
          </div>
        </div>

        {/* Activity Section */}
        <div style={styles.activitySection}>
          <h2 style={styles.activityTitle}>Recent Activity</h2>
          {mockActivity.map((activity) => (
            <div key={activity.id} style={styles.activityItem}>
              <FaClock style={styles.activityIcon} />
              <div>
                <p style={styles.activityText}>{activity.message}</p>
                <span style={styles.activityTime}>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
