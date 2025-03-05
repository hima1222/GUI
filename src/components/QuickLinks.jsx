import React from 'react';

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <h2 className="quick-links-title">Quick Links</h2>
      <div className="quick-links">
        <a href="#Write" className="link-button">
          <span className="link-icon">📝</span>
          <span className="link-label">New Entry</span>
        </a>
        <a href="#Calendar" className="link-button">
          <span className="link-icon">📅</span>
          <span className="link-label">Calendar</span>
        </a>
        <a href="#Profile" className="link-button">
          <span className="link-icon">👤</span>
          <span className="link-label">Profile</span>
        </a>
      </div>
    </div>
  );
}

export default QuickLinks;
