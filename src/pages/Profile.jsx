import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import ProfileTabs from '../components/ProfileTabs';
import ProfileDetails from '../components/ProfileDetails';
import ReadingList from '../components/ReadingList';
import Conversations from '../components/Conversations';
import Following from '../components/Following';
import "./Profile.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfileHeader />
      <ProfileTabs />
      <div className="profile-content">
        <ProfileDetails />
        <ReadingList />
      </div>

      <Routes>
        <Route path="about" element={<ProfileDetails />} />
        <Route path="conversations" element={<Conversations />} />
        <Route path="following" element={<Following />} />
      </Routes>

    </div>
  );
};

export default ProfilePage;
