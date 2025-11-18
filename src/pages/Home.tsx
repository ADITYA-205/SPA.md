import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>Welcome to SPA Dashboard</h1>
      <div className="card">
        <h2>Home Page</h2>
        <p>This is a Single Page Application with React Router and protected routing.</p>
        
        {user ? (
          <div>
            <p>Welcome back, <strong>{user.name}</strong>!</p>
            <p>You can access the dashboard.</p>
            <Link to="/dashboard" className="btn">
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div>
            <p>Please log in to access the dashboard.</p>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
      
      <div className="card">
        <h3>Features</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>React Router with nested routes</li>
          <li>Protected routing for dashboard pages</li>
          <li>Authentication context with localStorage</li>
          <li>Dashboard with Profile, Settings, and Notifications</li>
          <li>Responsive design with modern CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
