import React from 'react';

const pricingData = [
  { zone: 'On-Street (Casual, Hourly)', rate: 'USD 1 or ZWG 26.36 per hour' },
  { zone: 'Parkade Reserved (Monthly)', rate: 'USD 90' },
  { zone: 'Parkade Unreserved (Monthly)', rate: 'USD 70' },
  { zone: 'Fourth Street Lot (Monthly)', rate: 'USD 60' },
];

const Pricing = () => {
  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Harare City Parking Pricing</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={thStyle}>Zone</th>
            <th style={thStyle}>Rate</th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map(({ zone, rate }, index) => (
            <tr key={index} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={tdStyle}>{zone}</td>
              <td style={tdStyle}>{rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  borderBottom: '2px solid #333',
  textAlign: 'left',
  padding: '0.5rem',
};

const tdStyle = {
  borderBottom: '1px solid #ccc',
  padding: '0.5rem',
};

const rowEvenStyle = {
  backgroundColor: '#f9f9f9',
};

const rowOddStyle = {
  backgroundColor: '#fff',
};

export default Pricing;
