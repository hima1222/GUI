import React, { useState } from "react";
//import "./InputField.css";

const InputField = ({ profileImage }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-container">
      <img
        src={profileImage || "/path/to/default-profile.jpg"} 
        alt="Profile"
        className="input-profile-image"
      />
      <input
        type="text"
        placeholder="Post a Message"
        className="message-input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} 
      />
      {isFocused && <button className="post-button">Post</button>}
    </div>
  );
};

export default InputField;

  