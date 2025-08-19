import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';

const AgentDashboard = ({ onLogout }) => {
  const [parkingSpaces, setParkingSpaces] = useState([]);
  const [newParking, setNewParking] = useState({ location: '', totalSpots: '' });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'parkingSpaces'), (snapshot) => {
      const spaces = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setParkingSpaces(spaces);
    });
    return () => unsubscribe();
  }, []);

  const handleAddParking = async () => {
    if (!newParking.location || !newParking.totalSpots) return alert('Fill all fields!');
    try {
      await addDoc(collection(db, 'parkingSpaces'), {
        location: newParking.location,
        totalSpots: parseInt(newParking.totalSpots),
        bookedSpots: 0,
        bookings: []
      });
      setNewParking({ location: '', totalSpots: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditParking = async (space) => {
    const location = prompt('New location:', space.location);
    const totalSpots = prompt('Total spots:', space.totalSpots);
    if (!location || !totalSpots) return;
    try {
      const spaceRef = doc(db, 'parkingSpaces', space.id);
      await updateDoc(spaceRef, { location, totalSpots: parseInt(totalSpots) });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteParking = async (id) => {
    if (!window.confirm('Delete this parking space?')) return;
    try {
      await deleteDoc(doc(db, 'parkingSpaces', id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetAvailability = async (space) => {
    const available = prompt('Set available spots:', space.totalSpots);
    if (!available) return;
    try {
      const spaceRef = doc(db, 'parkingSpaces', space.id);
      await updateDoc(spaceRef, { totalSpots: parseInt(available) });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', background: 'linear-gradient(135deg, #0f172a, #1e293b)', color: '#22c55e', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ margin: 0 }}>Agent Dashboard</h1>
        <button onClick={onLogout} style={{ backgroundColor: '#f87171', color: '#0f172a', border: 'none', borderRadius: 6, padding: '0.5rem 1rem', fontWeight: 'bold', cursor: 'pointer' }}>Logout</button>
      </div>

      <h2 style={{ marginBottom: '1rem' }}>Manage Parking Spaces</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Location"
          value={newParking.location}
          onChange={(e) => setNewParking({ ...newParking, location: e.target.value })}
          style={{ flex: 2, padding: '0.5rem', borderRadius: 6, border: '1px solid #374151', backgroundColor: '#1e293b', color: '#22c55e', outline: 'none' }}
        />
        <input
          type="number"
          placeholder="Total Spots"
          value={newParking.totalSpots}
          onChange={(e) => setNewParking({ ...newParking, totalSpots: e.target.value })}
          style={{ flex: 1, padding: '0.5rem', borderRadius: 6, border: '1px solid #374151', backgroundColor: '#1e293b', color: '#22c55e', outline: 'none' }}
        />
        <button onClick={handleAddParking} style={{ backgroundColor: '#22c55e', color: '#0f172a', border: 'none', borderRadius: 6, cursor: 'pointer', padding: '0.5rem 1rem', fontWeight: 'bold' }}>Add</button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #374151' }}>
              <th style={{ padding: '0.75rem', textAlign: 'left' }}>Location</th>
              <th style={{ padding: '0.75rem', textAlign: 'center' }}>Total Spots</th>
              <th style={{ padding: '0.75rem', textAlign: 'center' }}>Booked Spots</th>
              <th style={{ padding: '0.75rem', textAlign: 'center' }}>Bookings (User - Expiry)</th>
              <th style={{ padding: '0.75rem', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parkingSpaces.map(space => (
              <tr key={space.id} style={{ borderBottom: '1px solid #374151' }}>
                <td style={{ padding: '0.75rem' }}>{space.location}</td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>{space.totalSpots}</td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>{space.bookedSpots || 0}</td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                  {space.bookings && space.bookings.length > 0 ? space.bookings.map((b, i) => (
                    <div key={i}>{b.user} - {new Date(b.expiresAt).toLocaleString()}</div>
                  )) : 'No bookings'}
                </td>
                <td style={{ padding: '0.75rem', textAlign: 'center', display: 'flex', gap: '0.25rem', justifyContent: 'center' }}>
                  <button onClick={() => handleEditParking(space)} style={{ backgroundColor: '#22c55e', color: '#0f172a', border: 'none', borderRadius: 4, padding: '0.25rem 0.5rem', cursor: 'pointer' }}>Edit</button>
                  <button onClick={() => handleDeleteParking(space.id)} style={{ backgroundColor: '#f87171', color: '#0f172a', border: 'none', borderRadius: 4, padding: '0.25rem 0.5rem', cursor: 'pointer' }}>Delete</button>
                  <button onClick={() => handleSetAvailability(space)} style={{ backgroundColor: '#3b82f6', color: '#0f172a', border: 'none', borderRadius: 4, padding: '0.25rem 0.5rem', cursor: 'pointer' }}>Set Availability</button>
                </td>
              </tr>
            ))}
            {parkingSpaces.length === 0 && (
              <tr>
                <td colSpan="5" style={{ padding: '1rem', textAlign: 'center', color: '#9ca3af' }}>No parking spaces added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentDashboard;
