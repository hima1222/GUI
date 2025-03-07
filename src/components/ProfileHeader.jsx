import React from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = () => {

  const Navigate  = useNavigate();

  return (
    <div className="profile-header">
      <div className="cover-photo"></div>
      <div className="profile-info">
        <img src="/path-to-profile-pic.jpg" alt="Profile" className="profile-pic" />
        <div className="user-details">
          <h2>username</h2>
          <p>@username</p>
        </div>
        <div className="stats">
          <span>0 Works</span>
          <span>0 Reading List</span>
          <span>0 Followers</span>
        </div>
        <button className="edit-profile-btn" onClick={() => Navigate('/Settings')}>Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
