import React from 'react';

const pricingData = [
  { zone: 'On‑Street (Casual, Hourly)', rate: 'USD 1 or ZWG 26.36 per hour' },
  { zone: 'Parkade Reserved (Monthly)', rate: 'USD 90' },
  { zone: 'Parkade Unreserved (Monthly)', rate: 'USD 70' },
  { zone: 'Fourth Street Lot (Monthly)', rate: 'USD 60' },
];

const Pricing = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff',  // white background
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          width: '100%',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          borderRadius: '14px',
          border: '1px solid #e0e0e0',
          padding: '2.5rem',
          backgroundColor: '#fafafa',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '2.4rem',
            color: '#222',
            marginBottom: '2rem',
            fontWeight: '700',
          }}
        >
          Harare City Parking – Pricing Guide
        </h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th
                style={{
                  padding: '1rem 1.2rem',
                  fontSize: '1.2rem',
                  borderBottom: '3px solid #1976d2',
                  color: '#1976d2',
                  textAlign: 'left',
                  fontWeight: '600',
                }}
              >
                Parking Zone
              </th>
              <th
                style={{
                  padding: '1rem 1.2rem',
                  fontSize: '1.2rem',
                  borderBottom: '3px solid #1976d2',
                  color: '#1976d2',
                  textAlign: 'left',
                  fontWeight: '600',
                }}
              >
                Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map(({ zone, rate }, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor: i % 2 === 0 ? '#fff' : '#f5f8fa',
                }}
              >
                <td
                  style={{
                    padding: '1rem 1.2rem',
                    fontSize: '1rem',
                    color: '#333',
                  }}
                >
                  {zone}
                </td>
                <td
                  style={{
                    padding: '1rem 1.2rem',
                    fontSize: '1rem',
                    color: '#333',
                  }}
                >
                  {rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
