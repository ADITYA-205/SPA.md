import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="container">
      <div className="dashboard-layout">
        <div className="dashboard-sidebar">
          <h3>Dashboard</h3>
          <nav>
            <ul className="sidebar-nav">
              <li>
                <Link 
                  to="/dashboard" 
                  className={isActiveLink('/dashboard') ? 'active' : ''}
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/profile" 
                  className={isActiveLink('/dashboard/profile') ? 'active' : ''}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/settings" 
                  className={isActiveLink('/dashboard/settings') ? 'active' : ''}
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/notifications" 
                  className={isActiveLink('/dashboard/notifications') ? 'active' : ''}
                >
                  Notifications
                </Link>
              </li>
            </ul>
          </nav>
          
          <div style={{ marginTop: '2rem' }}>
            <Link to="/" className="btn btn-secondary" style={{ width: '100%' }}>
              Back to Home
            </Link>
          </div>
        </div>
        
        <div className="dashboard-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h1>Dashboard</h1>
            <div>
              Welcome, <strong>{user?.name}</strong>!
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
