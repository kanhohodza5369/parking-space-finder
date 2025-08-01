import React, { useState } from 'react';

const CustomerHelpAI = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I’m your 24/7 Parking Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  // Simple mock "AI" responses based on keywords
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
    // Add user message
    setMessages(prev => [...prev, { from: 'user', text: input }]);
    setIsThinking(true);

    // Simulate AI thinking delay
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

export default CustomerHelpAI;
