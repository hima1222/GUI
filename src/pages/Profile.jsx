import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import ProfileHeader from '../components/ProfileHeader';
import ProfileTabs from '../components/ProfileTabs';
import ProfileDetails from '../components/ProfileDetails';
import ReadingList from '../components/ReadingList';
import Conversations from '../pages/Conversations';
import Following from '../components/Following';
import "./Profile.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfileHeader />
      <ProfileTabs />

      <div className="profile-content">
        <Outlet/>
      </div>


    </div>
  );
};

export default ProfilePage;
