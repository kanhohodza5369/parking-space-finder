import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ParkingSpots from './ParkingSpots';
import MyBookings from './MyBookings';
import {
  BarChart,
  Bar,
  Cell,
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

// Discounts Component (simplified)
const Discounts = () => (
  <div>
    <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Available Discounts</h2>
    <ul style={{ listStyle: 'disc', paddingLeft: '20px', fontSize: '18px', color: '#374151' }}>
      <li>10% off for early morning parking (6am - 9am)</li>
      <li>15% discount for weekly bookings</li>
      <li>Special weekend promo: park 2 hours, get 1 hour free</li>
    </ul>
  </div>
);

// ShareSpot component
const ShareSpot = () => {
  const [friendEmail, setFriendEmail] = useState('');
  const [subscriptionHours, setSubscriptionHours] = useState('');
  const [message, setMessage] = useState('');

  const handleBookForFriend = e => {
    e.preventDefault();
    if (!friendEmail) {
      alert('Please enter your friend’s email.');
      return;
    }
    setMessage(`Parking spot successfully booked for ${friendEmail}!`);
    setFriendEmail('');
  };

  const handleShareSubscription = e => {
    e.preventDefault();
    if (!subscriptionHours || isNaN(subscriptionHours) || subscriptionHours <= 0) {
      alert('Please enter a valid number of hours to share.');
      return;
    }
    setMessage(`You shared ${subscriptionHours} unused subscription hours!`);
    setSubscriptionHours('');
  };

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', color: '#1e293b' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px' }}>Share Parking Spots</h2>

      <section style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h3 style={{ marginBottom: '12px', fontWeight: '600' }}>Book a Spot for a Friend</h3>
        <form onSubmit={handleBookForFriend} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="email"
            placeholder="Friend's email"
            value={friendEmail}
            onChange={e => setFriendEmail(e.target.value)}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #94a3b8', fontSize: '1rem' }}
            required
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Book for Friend
          </button>
        </form>
      </section>

      <section style={{ padding: '1.5rem', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <h3 style={{ marginBottom: '12px', fontWeight: '600' }}>Share Unused Subscription Hours</h3>
        <form onSubmit={handleShareSubscription} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="number"
            min="1"
            placeholder="Hours to share"
            value={subscriptionHours}
            onChange={e => setSubscriptionHours(e.target.value)}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid #94a3b8', fontSize: '1rem' }}
            required
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#16a34a',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Share Subscription
          </button>
        </form>
      </section>

      {message && (
        <p style={{ marginTop: '20px', color: '#2563eb', fontWeight: '600' }}>
          {message}
        </p>
      )}
    </div>
  );
};

// 24/7 Customer Help AI Assistant component
const CustomerHelpAI = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I’m your 24/7 Parking Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const generateResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('discount')) {
      return 'You can check our Discounts section for all current offers and promo codes.';
    } else if (msg.includes('parking spots')) {
      return 'Use the "Find Parking" feature to see live availability of parking spots near you.';
    } else if (msg.includes('payment')) {
      return 'You can pay securely via the app with multiple payment options including mobile money and cards.';
    } else if (msg.includes('help') || msg.includes('support')) {
      return 'I’m here to help! You can also contact our live support at +1 (234) 567-890 anytime.';
    } else if (msg.trim() === '') {
      return 'Please type your question or message.';
    }
    return "Sorry, I didn't quite get that. Could you please rephrase?";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setIsThinking(true);

    setTimeout(() => {
      const botReply = generateResponse(input);
      setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
      setIsThinking(false);
    }, 1200);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '1rem',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#f3f4f6',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      height: '80vh',
    }}>
      <h2 style={{ marginBottom: '1rem', color: '#2563eb' }}>24/7 Customer Help AI Assistant</h2>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1rem',
          border: '1px solid #d1d5db',
          borderRadius: '10px',
          backgroundColor: '#fff',
          marginBottom: '1rem',
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '1rem',
              textAlign: msg.from === 'bot' ? 'left' : 'right',
            }}
          >
            <div style={{
              display: 'inline-block',
              padding: '0.6rem 1rem',
              borderRadius: '18px',
              backgroundColor: msg.from === 'bot' ? '#e0f2fe' : '#2563eb',
              color: msg.from === 'bot' ? '#0c4a6e' : '#fff',
              maxWidth: '80%',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isThinking && (
          <div style={{ color: '#64748b', fontStyle: 'italic' }}>Assistant is typing...</div>
        )}
      </div>

      <textarea
        rows={2}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your question here..."
        style={{
          resize: 'none',
          padding: '0.6rem 1rem',
          borderRadius: '12px',
          border: '1px solid #cbd5e1',
          fontSize: '1rem',
          fontFamily: 'inherit',
          marginBottom: '0.5rem',
        }}
      />
      <button
        onClick={handleSend}
        disabled={!input.trim()}
        style={{
          backgroundColor: input.trim() ? '#2563eb' : '#93c5fd',
          color: '#fff',
          padding: '0.7rem',
          fontWeight: '600',
          borderRadius: '12px',
          border: 'none',
          cursor: input.trim() ? 'pointer' : 'not-allowed',
          fontSize: '1rem',
        }}
      >
        Send
      </button>
    </div>
  );
};

const UserDashboard = ({ onLogout, user = { name: "Driver" } }) => {
  const [view, setView] = useState('dashboard');
  const [availabilityData, setAvailabilityData] = useState(initialAvailability);

  // Live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAvailabilityData(prevData =>
        prevData.map(loc => ({
          ...loc,
          available: Math.max(0, Math.min(100, loc.available + (Math.random() * 20 - 10))),
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    { id: 'discounts', label: 'Discounts', icon: 'mdi:tag-heart', onClick: () => setView('discounts') },
    { id: 'shareSpot', label: 'Share Spot', icon: 'mdi:share-variant', onClick: () => setView('shareSpot') },
    { id: 'customerCare', label: '24/7 Customer Care', icon: 'mdi:headset', onClick: () => setView('customerCare') }, // New button
    { id: 'logout', label: 'Log Out', icon: 'mdi:logout', onClick: onLogout },
  ];

  const renderDashboard = () => (
    <>
      <div style={styles.header}>
        <Icon icon="mdi:account-circle-outline" style={{ fontSize: '32px' }} />
        Welcome back, {user.name}
      </div>

      <div style={styles.chartCard}>
        <h3 style={styles.chartTitle}>Live Parking Availability by Location</h3>
        <ResponsiveContainer width="100%" height={360}>
          <BarChart
            data={availabilityData}
            margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
          >
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
              radius={[10, 10, 0, 0]}
              animationDuration={1000}
            >
              {availabilityData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.available < 30 ? '#ef4444' /* red */ : '#22c55e' /* green */}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );

  const BackButton = ({ onClick }) => (
    <button onClick={onClick} style={{ marginBottom: '20px' }}>
      <Icon icon="mdi:arrow-left" /> Back
    </button>
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
          <BackButton onClick={() => setView('dashboard')} />
          <ParkingSpots />
        </>}
        {view === 'bookings' && <>
          <BackButton onClick={() => setView('dashboard')} />
          <MyBookings />
        </>}
        {view === 'discounts' && <>
          <BackButton onClick={() => setView('dashboard')} />
          <Discounts />
        </>}
        {view === 'shareSpot' && <>
          <BackButton onClick={() => setView('dashboard')} />
          <ShareSpot />
        </>}
        {view === 'customerCare' && <>
          <BackButton onClick={() => setView('dashboard')} />
          <CustomerHelpAI />
        </>}
      </main>
    </div>
  );
};

export default UserDashboard; 
