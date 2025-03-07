import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import ReadingList from "../components/ReadingList";
import "./Profile.css";

const About = () => {

    const Navigate = useNavigate();

    return (
        
        <div className="profile-content">
            <ProfileDetails />
            <ReadingList />
        </div>
  
      
    );
  };
  
  export default About;