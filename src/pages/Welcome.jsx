import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Welcome.css';
import SignupPage from './SignupPage';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Hi, This is SoulScribbles.</h1>
        <p>The best platform for sharing your stories and creativity.</p>
        <div className="welcome-buttons">
          <button onClick={() => Navigate('/SignupPage')}> LogIn </button>

          <button onClick={() => Navigate('/SignupPage')}> SignUp </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
