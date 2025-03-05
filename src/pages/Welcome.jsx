import React from 'react';
import './Welcome.css';  // Add a CSS file for styles if needed

const Welcome = () => {
  return (
    <div className="welcome-container">
      <nav className="welcome-nav">
        <div className="logo">MyWebsite</div>
        <div className="nav-links">
          <a href="#browse">Browse</a>
          <a href="#community">Community</a>
          <a href="#login">Log In</a>
          <a href="#signup" className="signup-btn">Sign Up</a>
        </div>
      </nav>

      <div className="welcome-content">
        <h1>Hi, we're MyWebsite.</h1>
        <p>The best platform for sharing your stories and creativity.</p>
        <div className="welcome-buttons">
          <button onClick={() => window.location.href = "/read"}>Start Reading</button>
          <button onClick={() => window.location.href = "/write"}>Start Writing</button>
        </div>
        <div className="device-preview">
          <img src="/assets/laptop-preview.png" alt="Website Preview" />
          <img src="/assets/phone-preview.png" alt="App Preview" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
