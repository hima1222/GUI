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



      {/* <Routes>
        <Route path="/profile/about" element={
          <div className="profile-content">
            <ProfileDetails />
            <ReadingList />
          </div>
        } />
        <Route path="/profile/conversations" element={<Conversations />} />
        <Route path="/profile/following" element={<Following />} />
      </Routes> */}
      
      {/* <div>
        
        <Outlet/>
      </div> */}
           

    </div>
  );
};

export default ProfilePage;
