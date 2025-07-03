// src/Pages/MyBookings.jsx
import React, { useState } from 'react';

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
  const [bookings, setBookings] = useState(mockBookings);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(bookings.filter(b => b.id !== id));
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📒 My Bookings</h1>
      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '30px' }}>No bookings yet.</p>
      ) : (
        <div style={styles.list}>
          {bookings.map((booking) => (
            <div key={booking.id} style={styles.card}>
              <h3 style={styles.title}>{booking.slot}</h3>
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Car #:</strong> {booking.carNumber}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Payment:</strong> {booking.paymentMethod}</p>
              <button style={styles.deleteBtn} onClick={() => handleDelete(booking.id)}>Delete</button>
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
  },
  deleteBtn: {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#dc2626',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default MyBookings;
