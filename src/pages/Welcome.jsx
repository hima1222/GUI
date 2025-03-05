import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Hi, This is SoulScribbles.</h1>
        <p>The best platform for sharing your stories and creativity.</p>
        <div className="welcome-buttons">
          <button onClick={() => window.location.href = "/SignupPage"}>LogIn</button>
          <button onClick={() => window.location.href = "/SignupPage"}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
