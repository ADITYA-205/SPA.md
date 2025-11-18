import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Don't show navigation on login page
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link 
            to="/" 
            className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        
        {user ? (
          <>
            <li>
              <Link 
                to="/dashboard" 
                className={`nav-link ${location.pathname.startsWith('/dashboard') ? 'active' : ''}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button 
                onClick={handleLogout} 
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem' }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link 
              to="/login" 
              className={`nav-link ${isActiveLink('/login') ? 'active' : ''}`}
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
