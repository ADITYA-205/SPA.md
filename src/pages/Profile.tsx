import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      <p>Manage your personal information and account details.</p>
      
      <div className="card">
        <h3>Personal Information</h3>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
            <strong>Name:</strong>
            <span>{user?.name || 'John Doe'}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
            <strong>Email:</strong>
            <span>{user?.email || 'user@example.com'}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
            <strong>User ID:</strong>
            <span>{user?.id || '1'}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center' }}>
            <strong>Member Since:</strong>
            <span>January 1, 2024</span>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3>Account Statistics</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <h4 style={{ color: '#007bff', fontSize: '1.5rem', margin: '0' }}>42</h4>
            <p>Login Count</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <h4 style={{ color: '#28a745', fontSize: '1.5rem', margin: '0' }}>15</h4>
            <p>Projects</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <h4 style={{ color: '#ffc107', fontSize: '1.5rem', margin: '0' }}>8</h4>
            <p>Tasks Completed</p>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h3>Preferences</h3>
        <div style={{ marginTop: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Email notifications</span>
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Push notifications</span>
            </label>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" />
              <span>Weekly digest</span>
            </label>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <button className="btn" style={{ marginRight: '1rem' }}>
          Edit Profile
        </button>
        <button className="btn btn-secondary">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
