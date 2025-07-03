// src/Pages/BookParking.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const paymentOptions = [
  {
    name: 'Visa',
    value: 'Visa',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
  },
  {
    name: 'MasterCard',
    value: 'MasterCard',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
  },
];

const BookParking = () => {
  const { spotId } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    carNumber: '',
    date: '',
    time: '',
    slot: decodeURIComponent(spotId || ''),
    paymentMethod: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `✅ Parking booked for ${formData.name} - Slot: ${formData.slot} - Payment: ${formData.paymentMethod}`
    );
    setFormData({
      name: '',
      carNumber: '',
      date: '',
      time: '',
      slot: '',
      paymentMethod: '',
    });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Book Your Parking Spot</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="carNumber" placeholder="Car Number (e.g. ZIM1234)" value={formData.carNumber} onChange={handleChange} required style={inputStyle} />
          <input type="date" name="date" value={formData.date} onChange={handleChange} required style={inputStyle} />
          <input type="time" name="time" value={formData.time} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="slot" value={formData.slot} readOnly style={{ ...inputStyle, backgroundColor: '#e5e7eb' }} />

          <div style={{ marginBottom: '10px', fontWeight: '600', color: '#444' }}>Select Payment Method:</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            {paymentOptions.map(({ name, value, img }) => (
              <label key={value} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '16px', color: '#333', gap: '8px' }}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={value}
                  checked={formData.paymentMethod === value}
                  onChange={handleChange}
                  required
                  style={{ cursor: 'pointer' }}
                />
                <img src={img} alt={name} style={{ width: '40px', height: 'auto' }} />
                {name}
              </label>
            ))}
          </div>

          <button type="submit" style={buttonStyle}>Book Now</button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default BookParking;
