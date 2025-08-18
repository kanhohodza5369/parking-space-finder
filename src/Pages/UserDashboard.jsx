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
  ResponsiveContainer
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

// Discounts Component (enhanced)
const Discounts = () => (
  <div className="discounts-container">
    <h2 className="section-title">Available Discounts</h2>
    <div className="discount-cards">
      <div className="discount-card">
        <div className="discount-icon">
          <Icon icon="mdi:weather-sunny" />
        </div>
        <div>
          <h3>Morning Saver</h3>
          <p>10% off for early morning parking (6am - 9am)</p>
        </div>
      </div>
      
      <div className="discount-card">
        <div className="discount-icon">
          <Icon icon="mdi:calendar-week" />
        </div>
        <div>
          <h3>Weekly Commitment</h3>
          <p>15% discount for weekly bookings</p>
        </div>
      </div>
      
      <div className="discount-card">
        <div className="discount-icon">
          <Icon icon="mdi:calendar-weekend" />
        </div>
        <div>
          <h3>Weekend Special</h3>
          <p>Park 2 hours, get 1 hour free</p>
        </div>
      </div>
    </div>
  </div>
);

// ShareSpot component (enhanced)
const ShareSpot = () => {
  const [friendEmail, setFriendEmail] = useState('');
  const [subscriptionHours, setSubscriptionHours] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBookForFriend = e => {
    e.preventDefault();
    if (!friendEmail) {
      alert('Please enter your friend’s email.');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setMessage(`Parking spot successfully booked for ${friendEmail}!`);
      setFriendEmail('');
      setIsLoading(false);
    }, 1500);
  };

  const handleShareSubscription = e => {
    e.preventDefault();
    if (!subscriptionHours || isNaN(subscriptionHours)) {
      alert('Please enter a valid number of hours to share.');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setMessage(`You shared ${subscriptionHours} unused subscription hours!`);
      setSubscriptionHours('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="share-spot-container">
      <h2 className="section-title">Share Parking Spots</h2>

      <div className="share-card">
        <div className="share-header">
          <Icon icon="mdi:account-group" className="share-icon" />
          <h3>Book a Spot for a Friend</h3>
        </div>
        <form onSubmit={handleBookForFriend} className="share-form">
          <div className="form-group">
            <label>Friend's Email</label>
            <input
              type="email"
              placeholder="friend@example.com"
              value={friendEmail}
              onChange={e => setFriendEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="primary-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Book for Friend'}
          </button>
        </form>
      </div>

      <div className="share-card">
        <div className="share-header">
          <Icon icon="mdi:clock-time-four-outline" className="share-icon" />
          <h3>Share Unused Subscription Hours</h3>
        </div>
        <form onSubmit={handleShareSubscription} className="share-form">
          <div className="form-group">
            <label>Hours to Share</label>
            <input
              type="number"
              min="1"
              placeholder="Enter hours"
              value={subscriptionHours}
              onChange={e => setSubscriptionHours(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="primary-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Share Subscription'}
          </button>
        </form>
      </div>

      {message && (
        <div className="success-message">
          <Icon icon="mdi:check-circle-outline" />
          <span>{message}</span>
        </div>
      )}
    </div>
  );
};

// 24/7 Customer Help AI Assistant component (enhanced)
const CustomerHelpAI = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I’m your 24/7 Parking Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const generateResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes('discount')) {
      return 'You can check our Discounts section for all current offers and promo codes.';
    } else if (msg.includes('parking spots')) {
      return 'Use the "Find Parking" feature to see live availability of parking spots near you.';
    } else if (msg.includes('payment')) {
      return 'You can pay securely via the app with multiple payment options including mobile money and cards.';
    } else if (msg.includes('help') || msg.includes('support')) {
      return 'I’m here to help! You can also contact our live support at +263 123 456 789 anytime.';
    } else if (msg.includes('hours') || msg.includes('time')) {
      return 'Our parking spots are available 24/7. You can book anytime through our app.';
    } else if (msg.includes('book') || msg.includes('reserve')) {
      return 'To book a spot, go to "Find Parking", select your location, choose a spot, and confirm your booking.';
    } else if (msg.trim() === '') {
      return 'Please type your question or message.';
    }
    return "I'm still learning, but I'll connect you with a human agent if I can't help. Could you please rephrase your question?";
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

  if (isMinimized) {
    return (
      <div className="ai-assistant-minimized" onClick={() => setIsMinimized(false)}>
        <div className="ai-min-header">
          <Icon icon="mdi:robot-happy-outline" />
          <span>Need help?</span>
        </div>
        <div className="ai-min-bubble">
          <Icon icon="mdi:message-processing-outline" />
        </div>
      </div>
    );
  }

  return (
    <div className="ai-assistant-container">
      <div className="ai-header">
        <div className="ai-title">
          <Icon icon="mdi:robot-happy-outline" />
          <h3>24/7 Customer Help AI Assistant</h3>
        </div>
        <button 
          className="minimize-btn"
          onClick={() => setIsMinimized(true)}
        >
          <Icon icon="mdi:window-minimize" />
        </button>
      </div>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.from === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        {isThinking && (
          <div className="thinking-indicator">
            <div className="typing-dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <span>Assistant is typing...</span>
          </div>
        )}
      </div>

      <div className="chat-input-container">
        <textarea
          rows={2}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your question here..."
          className="chat-input"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className="send-btn"
        >
          <Icon icon="mdi:send" />
        </button>
      </div>
    </div>
  );
};

const UserDashboard = ({ onLogout, user = { name: "Driver" } }) => {
  const [view, setView] = useState('dashboard');
  const [availabilityData, setAvailabilityData] = useState(initialAvailability);
  const [stats, setStats] = useState({
    bookings: 12,
    hours: 36,
    savings: 45.70
  });

  // Live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAvailabilityData(prevData =>
        prevData.map(loc => ({
          ...loc,
          available: Math.max(0, Math.min(100, loc.available + (Math.random() * 20 - 10))),
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'mdi:view-dashboard', onClick: () => setView('dashboard') },
    { id: 'map', label: 'Find Parking', icon: 'mdi:car-search', onClick: () => setView('map') },
    { id: 'bookings', label: 'My Bookings', icon: 'mdi:calendar-check', onClick: () => setView('bookings') },
    { id: 'discounts', label: 'Discounts', icon: 'mdi:tag-heart', onClick: () => setView('discounts') },
    { id: 'shareSpot', label: 'Share Spot', icon: 'mdi:share-variant', onClick: () => setView('shareSpot') },
    { id: 'customerCare', label: '24/7 Support', icon: 'mdi:headset', onClick: () => setView('customerCare') },
  ];

  const BackButton = ({ onClick }) => (
    <button onClick={onClick} className="back-btn">
      <Icon icon="mdi:arrow-left" />
      Back to Dashboard
    </button>
  );

  const renderDashboard = () => (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {user.name}</h1>
          <p>Here's your parking overview today</p>
        </div>
        <div className="header-stats">
          <div className="stat-card">
            <Icon icon="mdi:calendar-check" />
            <div>
              <span>{stats.bookings}</span>
              <p>Bookings</p>
            </div>
          </div>
          <div className="stat-card">
            <Icon icon="mdi:clock-outline" />
            <div>
              <span>{stats.hours}</span>
              <p>Hours</p>
            </div>
          </div>
          <div className="stat-card">
            <Icon icon="mdi:cash" />
            <div>
              <span>${stats.savings.toFixed(2)}</span>
              <p>Savings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h2>Live Parking Availability</h2>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color high-availability"></div>
              <span>High Availability</span>
            </div>
            <div className="legend-item">
              <div className="legend-color low-availability"></div>
              <span>Low Availability</span>
            </div>
          </div>
        </div>
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
            <Tooltip 
              formatter={(value) => [`${Math.round(value)}%`, 'Availability']}
              labelFormatter={(label) => <strong>{label}</strong>}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Bar
              dataKey="available"
              radius={[6, 6, 0, 0]}
              animationDuration={1000}
            >
              {availabilityData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.available < 40 ? '#ef4444' : '#3b82f6'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-cards">
          <button className="action-card" onClick={() => setView('map')}>
            <Icon icon="mdi:map-marker" />
            <span>Find Parking</span>
          </button>
          <button className="action-card" onClick={() => setView('bookings')}>
            <Icon icon="mdi:calendar" />
            <span>My Bookings</span>
          </button>
          <button className="action-card" onClick={() => setView('discounts')}>
            <Icon icon="mdi:tag" />
            <span>Discounts</span>
          </button>
          <button className="action-card" onClick={() => setView('shareSpot')}>
            <Icon icon="mdi:share-variant" />
            <span>Share Spot</span>
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="app-logo">
            <Icon icon="mdi:parking" />
            <span>ParkSmart</span>
          </div>
          <div className="user-info">
            <div className="user-avatar">
              <Icon icon="mdi:account-circle" />
            </div>
            <div>
              <div className="user-name">{user.name}</div>
              <div className="user-role">Premium Member</div>
            </div>
          </div>
        </div>
        
        <div className="sidebar-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${view === item.id ? 'active' : ''}`}
              onClick={item.onClick}
            >
              <Icon icon={item.icon} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        
        <button className="logout-btn" onClick={onLogout}>
          <Icon icon="mdi:logout" />
          <span>Log Out</span>
        </button>
      </aside>

      <main className="dashboard-content">
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

      {/* CSS Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        :root {
          --primary: #2563eb;
          --primary-dark: #1d4ed8;
          --secondary: #10b981;
          --dark: #1e293b;
          --dark-light: #334155;
          --gray: #64748b;
          --gray-light: #e2e8f0;
          --light: #f8fafc;
          --white: #ffffff;
          --danger: #ef4444;
          --warning: #f59e0b;
          --success: #10b981;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --radius: 12px;
          --transition: all 0.3s ease;
        }

        .dashboard-layout {
          display: flex;
          min-height: 100vh;
          background-color: #f1f5f9;
        }

        .dashboard-sidebar {
          width: 280px;
          background: linear-gradient(180deg, var(--dark) 0%, #0f172a 100%);
          color: var(--white);
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          box-shadow: var(--shadow);
          z-index: 10;
        }

        .sidebar-header {
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 24px;
        }

        .app-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 32px;
        }

        .app-logo svg {
          font-size: 28px;
          color: var(--primary);
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar svg {
          font-size: 40px;
          color: var(--gray-light);
        }

        .user-name {
          font-weight: 600;
          font-size: 16px;
        }

        .user-role {
          font-size: 14px;
          color: var(--gray-light);
          opacity: 0.8;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          border: none;
          color: var(--gray-light);
          transition: var(--transition);
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-item.active {
          background: var(--primary);
          color: var(--white);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          background: transparent;
          border: none;
          color: var(--gray-light);
          margin-top: auto;
          transition: var(--transition);
        }

        .logout-btn:hover {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
        }

        .dashboard-content {
          flex: 1;
          padding: 32px;
          overflow-y: auto;
          background-color: #f1f5f9;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background-color: var(--white);
          border: 1px solid var(--gray-light);
          border-radius: 8px;
          color: var(--gray);
          font-weight: 500;
          margin-bottom: 24px;
          cursor: pointer;
          transition: var(--transition);
        }

        .back-btn:hover {
          background-color: var(--gray-light);
        }

        .back-btn svg {
          font-size: 20px;
        }

        .dashboard-header {
          background: var(--white);
          border-radius: var(--radius);
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow);
        }

        .dashboard-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
          color: var(--dark);
        }

        .dashboard-header p {
          font-size: 16px;
          color: var(--gray);
          margin-bottom: 24px;
        }

        .header-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid var(--gray-light);
          box-shadow: var(--shadow);
        }

        .stat-card svg {
          font-size: 32px;
          color: var(--primary);
          background: rgba(37, 99, 235, 0.1);
          padding: 10px;
          border-radius: 50%;
        }

        .stat-card span {
          font-size: 24px;
          font-weight: 700;
          color: var(--dark);
        }

        .stat-card p {
          font-size: 14px;
          color: var(--gray);
          margin: 0;
        }

        .chart-card {
          background: var(--white);
          border-radius: var(--radius);
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow);
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .chart-header h2 {
          font-size: 20px;
          font-weight: 600;
          color: var(--dark);
        }

        .chart-legend {
          display: flex;
          gap: 16px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--gray);
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }

        .high-availability {
          background: var(--primary);
        }

        .low-availability {
          background: var(--danger);
        }

        .quick-actions {
          background: var(--white);
          border-radius: var(--radius);
          padding: 24px;
          box-shadow: var(--shadow);
        }

        .quick-actions h2 {
          font-size: 20px;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 16px;
        }

        .action-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px 16px;
          background: var(--white);
          border: 1px solid var(--gray-light);
          border-radius: var(--radius);
          cursor: pointer;
          transition: var(--transition);
        }

        .action-card:hover {
          border-color: var(--primary);
          background: rgba(37, 99, 235, 0.05);
          transform: translateY(-2px);
        }

        .action-card svg {
          font-size: 32px;
          color: var(--primary);
        }

        .action-card span {
          font-weight: 500;
          color: var(--dark);
        }

        .discounts-container {
          background: var(--white);
          border-radius: var(--radius);
          padding: 32px;
          box-shadow: var(--shadow);
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 24px;
          color: var(--dark);
          padding-bottom: 16px;
          border-bottom: 1px solid var(--gray-light);
        }

        .discount-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .discount-card {
          display: flex;
          gap: 16px;
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid var(--gray-light);
          transition: var(--transition);
        }

        .discount-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow);
        }

        .discount-icon {
          width: 56px;
          height: 56px;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .discount-icon svg {
          font-size: 28px;
          color: var(--primary);
        }

        .discount-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--dark);
        }

        .discount-card p {
          font-size: 16px;
          color: var(--gray);
        }

        .share-spot-container {
          background: var(--white);
          border-radius: var(--radius);
          padding: 32px;
          box-shadow: var(--shadow);
          max-width: 700px;
          margin: 0 auto;
        }

        .share-card {
          margin-bottom: 32px;
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid var(--gray-light);
        }

        .share-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .share-header h3 {
          font-size: 20px;
          font-weight: 600;
          color: var(--dark);
        }

        .share-icon {
          font-size: 24px;
          color: var(--primary);
          background: rgba(37, 99, 235, 0.1);
          padding: 10px;
          border-radius: 50%;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--dark);
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--gray-light);
          border-radius: 8px;
          font-size: 16px;
          transition: var(--transition);
        }

        .form-group input:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .primary-btn {
          padding: 12px 24px;
          background: var(--primary);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .primary-btn:hover {
          background: var(--primary-dark);
        }

        .primary-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 8px;
          color: var(--success);
          font-weight: 500;
          margin-top: 16px;
        }

        .ai-assistant-container {
          background: var(--white);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          height: 80vh;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
        }

        .ai-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: var(--dark);
          color: var(--white);
        }

        .ai-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 18px;
          font-weight: 600;
        }

        .ai-title svg {
          font-size: 24px;
          color: #a78bfa;
        }

        .minimize-btn {
          background: transparent;
          border: none;
          color: var(--white);
          cursor: pointer;
          font-size: 20px;
          opacity: 0.7;
        }

        .minimize-btn:hover {
          opacity: 1;
        }

        .chat-messages {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: var(--light);
        }

        .message {
          max-width: 80%;
        }

        .user-message {
          align-self: flex-end;
        }

        .bot-message {
          align-self: flex-start;
        }

        .message-content {
          padding: 16px 20px;
          border-radius: 18px;
          background: var(--white);
          box-shadow: var(--shadow);
          color: var(--dark);
          font-size: 16px;
          line-height: 1.5;
        }

        .user-message .message-content {
          background: var(--primary);
          color: var(--white);
          border-bottom-right-radius: 4px;
        }

        .bot-message .message-content {
          background: var(--white);
          border-bottom-left-radius: 4px;
        }

        .thinking-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--gray);
          font-style: italic;
          padding: 8px 16px;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
        }

        .typing-dots div {
          width: 8px;
          height: 8px;
          background: var(--gray);
          border-radius: 50%;
          animation: typing 1.4s infinite ease-in-out both;
        }

        .typing-dots div:nth-child(1) {
          animation-delay: -0.32s;
        }

        .typing-dots div:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes typing {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .chat-input-container {
          display: flex;
          padding: 16px;
          border-top: 1px solid var(--gray-light);
          background: var(--white);
        }

        .chat-input {
          flex: 1;
          resize: none;
          padding: 14px 16px;
          border-radius: 24px;
          border: 1px solid var(--gray-light);
          font-size: 16px;
          outline: none;
          transition: var(--transition);
        }

        .chat-input:focus {
          border-color: var(--primary);
        }

        .send-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--primary);
          color: var(--white);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 12px;
          cursor: pointer;
          transition: var(--transition);
        }

        .send-btn:hover {
          background: var(--primary-dark);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .ai-assistant-minimized {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--primary);
          color: var(--white);
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          box-shadow: var(--shadow);
          z-index: 100;
        }

        .ai-min-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
        }

        .ai-min-bubble {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--white);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default UserDashboard;