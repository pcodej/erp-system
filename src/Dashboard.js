import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const username = location.state?.username || 'User';

  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const sidebarStyle = {
    width: '220px',
    backgroundColor: '#063352',
    color: '#fff',
    padding: '20px'
  };

  const contentStyle = {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: '30px',
  };

  const cardStyle = {
    borderRadius: '10px',
    padding: '20px',
    color: '#fff',
    marginBottom: '20px',
  };

  const cardsContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const tableStyle = {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '0px',
  };

  const graphPlaceholder1 = {
    width: '100%',
    height: '10%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '0px',
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h3>ERP Dashboard</h3>
        <nav>
          <ul style={{ listStyle: 'none', padding: 20 }}>
            {['Profile','Dashboard', 'Purchase Orders', 'Sales', 'Inventory', 'Suppliers', 'Reports', 'Settings','Logout'].map(item => (
              <li key={item} style={{ margin: '15px 0' }}>
                <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        <h2>Welcome, {username}!</h2>
        <p style={{ color: '#555' }}>Here's a quick overview of your ERP system.</p>

        {/* Summary Cards */}
        <div style={cardsContainer}>
          <div style={{ ...cardStyle, backgroundColor: '#3498db' }}>
            <h5>Orders</h5>
            <h2>120</h2>
          </div>
          <div style={{ ...cardStyle, backgroundColor: '#2ecc71' }}>
            <h5>Sales</h5>
            <h2>$45,000</h2>
          </div>
          <div style={{ ...cardStyle, backgroundColor: '#f1c40f' }}>
            <h5>Inventory</h5>
            <h2>320 Items</h2>
          </div>
          <div style={{ ...cardStyle, backgroundColor: '#e74c3c' }}>
            <h5>Pending POs</h5>
            <h2>18</h2>
          </div>
        </div>
        
        <div style={graphPlaceholder1}>
            <h4 style={{ marginBottom: '20px',padding:'20px', 'textAlign':'center'}} >Profit Graph</h4>
        </div>

        {/* Transactions Table */}
        <div style={tableStyle}>
          <h4 style={{ marginBottom: '20px',padding:'20px'}}>Recent Transactions</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#ecf0f1' }}>
                <th style={{ padding: '10px' }}>Date</th>
                <th style={{ padding: '10px' }}>Type</th>
                <th style={{ padding: '10px' }}>Description</th>
                <th style={{ padding: '10px' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>2025-05-10</td>
                <td style={{ padding: '10px' }}>Sale</td>
                <td style={{ padding: '10px' }}>Invoice #1021</td>
                <td style={{ padding: '10px' }}>$1,200</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>2025-05-09</td>
                <td style={{ padding: '10px' }}>Purchase</td>
                <td style={{ padding: '10px' }}>PO #332</td>
                <td style={{ padding: '10px' }}>$800</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>2025-05-08</td>
                <td style={{ padding: '10px' }}>Inventory</td>
                <td style={{ padding: '10px' }}>Stock Refill</td>
                <td style={{ padding: '10px' }}>$5,000</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
