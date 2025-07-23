import React, { useState } from 'react';
import AdminRegisterComp from './AdminRegisterComp';
import AdminLoginComp from './AdminLoginComp';
import AdminForgotPasswordComp from './AdminForgotPasswordComp';
import './AdminAuthPage.css'; // Import the CSS file

const AdminAuthPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-card">
        {showForgotPassword ? (
          <AdminForgotPasswordComp />
        ) : showRegister ? (
          <AdminRegisterComp />
        ) : (
          <AdminLoginComp />
        )}
        <div className="admin-auth-toggle-buttons">
          {showForgotPassword ? (
            <button onClick={() => setShowForgotPassword(false)}>Back to Login</button>
          ) : (
            <>
              <button id='admin-auth-register-btn' onClick={() => setShowRegister(!showRegister)}>
                {showRegister ? 'Back to Login' : 'Register'}
              </button>
              <button id='admin-auth-register-btn' onClick={() => setShowForgotPassword(true)}>Forgot Password</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAuthPage;
