import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const DashboardOverview: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Overview</h2>
      <p>Welcome to your dashboard overview, {user?.name}!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div className="card">
          <h3>Profile</h3>
          <p>View and manage your personal information</p>
          <a href="/dashboard/profile" style={{ color: '#007bff', textDecoration: 'none' }}>
            View Profile →
          </a>
        </div>
        
        <div className="card">
          <h3>Settings</h3>
          <p>Configure your application preferences</p>
          <a href="/dashboard/settings" style={{ color: '#007bff', textDecoration: 'none' }}>
            Manage Settings →
          </a>
        </div>
        
        <div className="card">
          <h3>Notifications</h3>
          <p>Check your recent notifications</p>
          <a href="/dashboard/notifications" style={{ color: '#007bff', textDecoration: 'none' }}>
            View Notifications →
          </a>
        </div>
      </div>
      
      <div className="card" style={{ marginTop: '2rem' }}>
        <h3>Quick Stats</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#007bff', fontSize: '2rem', margin: '0' }}>12</h4>
            <p>Notifications</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#28a745', fontSize: '2rem', margin: '0' }}>98%</h4>
            <p>Profile Complete</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#ffc107', fontSize: '2rem', margin: '0' }}>5</h4>
            <p>Pending Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
