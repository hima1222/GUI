import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import "./Profile.css";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="profile-tabs">

      <Link to="/profile/about" className="tab">
        <button className={activeTab === 'about' ? 'active' : ''}
          onClick={() => setActiveTab('about')} >
          About
        </button>
      </Link>

      <Link to="/profile/conversations" className="tab">
        <button
          className={activeTab === 'conversations' ? 'active' : ''}
          onClick={() => setActiveTab('conversations')}>
          Conversations
        </button>
      </Link>

      <Link to="/profile/following" className="tab">
        <button
          className={activeTab === 'following' ? 'active' : ''}
          onClick={() => setActiveTab('following')}>
          Following
        </button>
      </Link>

    </div>
  );
};

export default ProfileTabs;
