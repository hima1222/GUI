import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProfileDetails = () => {

  const Navigate = useNavigate();

  return (
    <div className="profile-details">

      <h3>About</h3>
      <p>Help people get to know you</p>

      <button className='add-description-button' onClick={() => Navigate('/Settings')}>
          Add Description
      </button>

      <p>Joined date</p>

    </div>
  );
};

export default ProfileDetails;