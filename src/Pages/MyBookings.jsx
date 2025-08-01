// src/Pages/MyBookings.jsx
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import calendarClock from '@iconify/icons-mdi/calendar-clock';
import carInfo from '@iconify/icons-mdi/car-info';
import mapMarker from '@iconify/icons-mdi/map-marker';
import creditCardOutline from '@iconify/icons-mdi/credit-card-outline';
import accountIcon from '@iconify/icons-mdi/account';

const mockBookings = [
  {
    id: 1,
    name: 'Tafadzwa Kanhohodza',
    carNumber: 'ZIM1234',
    date: '2025-06-30',
    time: '10:00',
    slot: 'Julius Nyerere Way',
    paymentMethod: 'Visa',
  },
  {
    id: 2,
    name: 'Tafadzwa Kanhohodza',
    carNumber: 'ZIM5678',
    date: '2025-07-01',
    time: '14:00',
    slot: 'Robert Mugabe Rd',
    paymentMethod: 'MasterCard',
  },
];

const MyBookings = () => {
  const [bookings] = useState(mockBookings);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> My Bookings</h1>
      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '30px' }}>No bookings yet.</p>
      ) : (
        <div style={styles.list}>
          {bookings.map((booking) => (
            <div key={booking.id} style={styles.card}>
              <h3 style={styles.title}>
                <Icon icon={mapMarker} style={styles.icon} />
                {booking.slot}
              </h3>
              <p><Icon icon={accountIcon} style={styles.icon} /> {booking.name}</p>
              <p><Icon icon={carInfo} style={styles.icon} /> {booking.carNumber}</p>
              <p><Icon icon={calendarClock} style={styles.icon} /> {booking.date} — {booking.time}</p>
              <p><Icon icon={creditCardOutline} style={styles.icon} /> {booking.paymentMethod}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#1f2937',
  },
  list: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#1d4ed8',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  icon: {
    marginRight: '8px',
    verticalAlign: 'middle',
    fontSize: '20px',
    color: '#374151',
  },
};

export default MyBookings;
