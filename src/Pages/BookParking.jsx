import React, { useState } from 'react';

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
  const [formData, setFormData] = useState({
    name: '',
    carNumber: '',
    date: '',
    time: '',
    slot: '',
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
      `Parking booked for ${formData.name} - Slot: ${formData.slot} - Payment Method: ${formData.paymentMethod}`
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

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '500px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#1f2937',
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
    transition: 'background-color 0.3s ease',
  };

  const radioContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  };

  const radioLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#333',
    gap: '8px',
  };

  const radioInputStyle = {
    cursor: 'pointer',
  };

  const paymentLogoStyle = {
    width: '40px',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Book Your Parking Spot</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="carNumber"
            placeholder="Car Number (e.g. ZIM1234)"
            value={formData.carNumber}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <select
            name="slot"
            value={formData.slot}
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="">Select a Slot</option>
            <option value="Slot A">Slot A</option>
            <option value="Slot B">Slot B</option>
            <option value="Slot C">Slot C</option>
            <option value="Slot D">Slot D</option>
          </select>

          {/* Payment Method radios with logos */}
          <div style={{ marginBottom: '10px', fontWeight: '600', color: '#444' }}>
            Select Payment Method:
          </div>
          <div style={radioContainerStyle}>
            {paymentOptions.map(({ name, value, img }) => (
              <label key={value} style={radioLabelStyle}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={value}
                  checked={formData.paymentMethod === value}
                  onChange={handleChange}
                  style={radioInputStyle}
                  required
                />
                <img src={img} alt={name} style={paymentLogoStyle} />
                {name}
              </label>
            ))}
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1e40af')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2563eb')}
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookParking;
