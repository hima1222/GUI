import React from "react";
import ProfileDetails from "../components/ProfileDetails";
import ReadingList from "../components/ReadingList";
import "./Profile.css";

const About = () => {
    return (
        
        <div className="profile-content">
            <ProfileDetails />
            <ReadingList />
        </div>
  
      
    );
  };
  
  export default About;