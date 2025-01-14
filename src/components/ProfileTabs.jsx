import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import "./Profile.css";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="profile-tabs">
      <button
        className={activeTab === 'about' ? 'active' : ''}
        onClick={() => setActiveTab('about')}
        
      >
        <Link to="about" className="tab">About</Link>
      </button>
      <button
        className={activeTab === 'conversations' ? 'active' : ''}
        onClick={() => setActiveTab('conversations')}
      >
        <Link to="conversations" className="tab">Conversations</Link>
      </button>
      <button
        className={activeTab === 'following' ? 'active' : ''}
        onClick={() => setActiveTab('following')}
      >
        <Link to="following" className="tab">Following</Link>
      </button>

    </div>
  );
};

export default ProfileTabs;
