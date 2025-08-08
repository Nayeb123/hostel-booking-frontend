import React from 'react';

export default function AuthModal({ isOpen, onClose, activeTab, onTabSwitch, onLogin, onRegister }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => onTabSwitch('login')}
          >
            Login
          </button>
          <button 
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => onTabSwitch('register')}
          >
            Register
          </button>
        </div>

        {activeTab === 'login' ? (
          <form onSubmit={onLogin}>
            <div className="form-group">
              <label htmlFor="login-username">Username:</label>
              <input type="text" id="login-username" required />
            </div>
            <div className="form-group">
              <label htmlFor="login-studentid">Student ID:</label>
              <input type="text" id="login-studentid" required />
            </div>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={onRegister}>
            <div className="form-group">
              <label htmlFor="register-username">Username:</label>
              <input type="text" id="register-username" required />
            </div>
            <div className="form-group">
              <label htmlFor="register-studentid">Student ID:</label>
              <input type="text" id="register-studentid" required />
            </div>
            <div className="form-group">
              <label htmlFor="register-email">Email:</label>
              <input type="email" id="register-email" required />
            </div>
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
}
