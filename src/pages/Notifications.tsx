import React, { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Welcome to Dashboard',
      message: 'You have successfully logged in to your dashboard. Explore all the features available to you.',
      type: 'success',
      timestamp: '2 hours ago',
      read: false
    },
    {
      id: '2',
      title: 'Profile Update',
      message: 'Your profile information has been updated successfully.',
      type: 'info',
      timestamp: '1 day ago',
      read: false
    },
    {
      id: '3',
      title: 'Security Alert',
      message: 'A new device has logged into your account. If this was not you, please secure your account.',
      type: 'warning',
      timestamp: '3 days ago',
      read: true
    },
    {
      id: '4',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur this weekend from 2 AM to 4 AM EST.',
      type: 'info',
      timestamp: '1 week ago',
      read: true
    },
    {
      id: '5',
      title: 'Payment Failed',
      message: 'We were unable to process your recent payment. Please update your payment information.',
      type: 'error',
      timestamp: '2 weeks ago',
      read: true
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return '✅';
      case 'warning':
        return '⚠️';
      case 'error':
        return '❌';
      default:
        return 'ℹ️';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return '#28a745';
      case 'warning':
        return '#ffc107';
      case 'error':
        return '#dc3545';
      default:
        return '#007bff';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <h2>Notifications</h2>
      <p>Manage your notifications and stay updated with your account activity.</p>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3>
            All Notifications 
            {unreadCount > 0 && (
              <span style={{ 
                backgroundColor: '#dc3545', 
                color: 'white', 
                padding: '2px 8px', 
                borderRadius: '12px', 
                fontSize: '0.8rem', 
                marginLeft: '0.5rem' 
              }}>
                {unreadCount} unread
              </span>
            )}
          </h3>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead} 
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
            >
              Mark All as Read
            </button>
          )}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setFilter('all')}
              className={`btn ${filter === 'all' ? '' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}
            >
              All ({notifications.length})
            </button>
            <button 
              onClick={() => setFilter('unread')}
              className={`btn ${filter === 'unread' ? '' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}
            >
              Unread ({unreadCount})
            </button>
            <button 
              onClick={() => setFilter('read')}
              className={`btn ${filter === 'read' ? '' : 'btn-secondary'}`}
              style={{ padding: '0.25rem 0.75rem', fontSize: '0.9rem' }}
            >
              Read ({notifications.length - unreadCount})
            </button>
          </div>
        </div>
        
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {filteredNotifications.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
              No notifications found
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div 
                key={notification.id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  backgroundColor: notification.read ? '#f8f9fa' : 'white',
                  borderLeft: `4px solid ${getNotificationColor(notification.type)}`,
                  cursor: 'pointer'
                }}
                onClick={() => markAsRead(notification.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>
                        {getNotificationIcon(notification.type)}
                      </span>
                      <h4 style={{ margin: 0, color: getNotificationColor(notification.type) }}>
                        {notification.title}
                      </h4>
                      {!notification.read && (
                        <span style={{ 
                          backgroundColor: '#007bff', 
                          color: 'white', 
                          padding: '2px 6px', 
                          borderRadius: '8px', 
                          fontSize: '0.7rem' 
                        }}>
                          NEW
                        </span>
                      )}
                    </div>
                    <p style={{ margin: '0.5rem 0', color: '#333', lineHeight: '1.4' }}>
                      {notification.message}
                    </p>
                    <small style={{ color: '#666' }}>
                      {notification.timestamp}
                    </small>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNotification(notification.id);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#dc3545',
                      cursor: 'pointer',
                      padding: '0.25rem',
                      marginLeft: '1rem'
                    }}
                    title="Delete notification"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
