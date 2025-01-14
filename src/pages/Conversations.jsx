import React from "react";
//import ProfileHeader from "../components/ProfileHeader"; // Import existing ProfileHeader
import InputField from "../components/InputField"; // Import the new InputField component
import "./Conversations.css";

const Conversations = () => {
  return (
    //<div>
      //{/* Reuse Profile Header */}
      //<ProfileHeader />

      <div className="conversations-container">
        {/* Reuse Input Field */}
        <InputField profileImage="/path/to/profile-image.jpg" /> {/* Pass profile image dynamically */}

      </div>
    //</div>

    
  );
};

export default Conversations;

