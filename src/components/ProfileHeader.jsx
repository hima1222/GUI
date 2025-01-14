import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="cover-photo"></div>
      <div className="profile-info">
        <img src="/path-to-profile-pic.jpg" alt="Profile" className="profile-pic" />
        <div className="user-details">
          <h2>Hhs_200222</h2>
          <p>@Hhs_200222</p>
        </div>
        <div className="stats">
          <span>0 Works</span>
          <span>1 Reading List</span>
          <span>0 Followers</span>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
