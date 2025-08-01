import React, { useState } from 'react';

const ShareSpot = () => {
  const [friendBooking, setFriendBooking] = useState({
    name: '',
    email: '',
    note: '',
  });

  const [subscriptionShare, setSubscriptionShare] = useState({
    recipient: '',
    hours: '',
  });

  const handleFriendBooking = (e) => {
    e.preventDefault();
    // handle booking for friend logic here
    alert('Booking submitted for your friend.');
  };

  const handleSubscriptionShare = (e) => {
    e.preventDefault();
    // handle sharing subscription logic here
    alert('Subscription shared successfully.');
  };

  return (
    <div style={{ padding: '2rem 1rem', backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)' }}>
        <h1 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '2rem' }}>🚗 Share Your Parking Spot</h1>

        {/* Section 1: Book for a Friend */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '1rem' }}>Book for a Friend</h2>
          <form onSubmit={handleFriendBooking} style={{ display: 'grid', gap: '1rem' }}>
            <input
              type="text"
              placeholder="Friend's Name"
              value={friendBooking.name}
              onChange={(e) => setFriendBooking({ ...friendBooking, name: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Friend's Email"
              value={friendBooking.email}
              onChange={(e) => setFriendBooking({ ...friendBooking, email: e.target.value })}
              required
              style={inputStyle}
            />
            <textarea
              placeholder="Optional Note"
              value={friendBooking.note}
              onChange={(e) => setFriendBooking({ ...friendBooking, note: e.target.value })}
              rows="3"
              style={inputStyle}
            ></textarea>
            <button type="submit" style={buttonStyle}>Book for Friend</button>
          </form>
        </section>

        {/* Section 2: Share Subscription */}
        <section>
          <h2 style={{ fontSize: '1.5rem', color: '#2563eb', marginBottom: '1rem' }}>Share Your Subscription</h2>
          <form onSubmit={handleSubscriptionShare} style={{ display: 'grid', gap: '1rem' }}>
            <input
              type="email"
              placeholder="Recipient's Email"
              value={subscriptionShare.recipient}
              onChange={(e) => setSubscriptionShare({ ...subscriptionShare, recipient: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="number"
              placeholder="Hours to Share"
              value={subscriptionShare.hours}
              onChange={(e) => setSubscriptionShare({ ...subscriptionShare, hours: e.target.value })}
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Share Subscription</button>
          </form>
        </section>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#2563eb',
  color: '#fff',
  padding: '0.75rem 1.25rem',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default ShareSpot;
