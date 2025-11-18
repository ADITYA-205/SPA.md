import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <h2>Settings</h2>
      <p>Configure your application preferences and account settings.</p>
      
      <form onSubmit={handleSaveSettings}>
        <div className="card">
          <h3>Appearance</h3>
          <div style={{ marginTop: '1rem' }}>
            <div className="form-group">
              <label htmlFor="theme">Theme:</label>
              <select 
                id="theme" 
                value={theme} 
                onChange={(e) => setTheme(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="language">Language:</label>
              <select 
                id="language" 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px' }}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3>Notifications</h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
                <span>Email notifications</span>
              </label>
              <small style={{ color: '#666', marginLeft: '1.5rem' }}>
                Receive email updates about your account activity
              </small>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={pushNotifications}
                  onChange={(e) => setPushNotifications(e.target.checked)}
                />
                <span>Push notifications</span>
              </label>
              <small style={{ color: '#666', marginLeft: '1.5rem' }}>
                Receive push notifications in your browser
              </small>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  checked={weeklyDigest}
                  onChange={(e) => setWeeklyDigest(e.target.checked)}
                />
                <span>Weekly digest</span>
              </label>
              <small style={{ color: '#666', marginLeft: '1.5rem' }}>
                Get a weekly summary of your activity
              </small>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3>Privacy & Security</h3>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked />
                <span>Two-factor authentication</span>
              </label>
              <small style={{ color: '#666', marginLeft: '1.5rem' }}>
                Add an extra layer of security to your account
              </small>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked />
                <span>Profile visibility</span>
              </label>
              <small style={{ color: '#666', marginLeft: '1.5rem' }}>
                Make your profile visible to other users
              </small>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" />
                <span>Data analytics</span>
              </label>
              <small style={{ color: '#666', marginLeft: '1.5rem' }}>
                Help us improve by sharing anonymous usage data
              </small>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <button type="submit" className="btn" style={{ marginRight: '1rem' }}>
            Save Settings
          </button>
          <button type="button" className="btn btn-secondary">
            Reset to Default
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
