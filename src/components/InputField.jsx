import React, { useState } from "react";
//import "./InputField.css";

const InputField = ({ profileImage }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-container">
      <img
        src={profileImage || "/path/to/default-profile.jpg"} // Default image fallback
        alt="Profile"
        className="input-profile-image"
      />
      <input
        type="text"
        placeholder="Post a Message"
        className="message-input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} // Optional: Hide button when not focused
      />
      {isFocused && <button className="post-button">Post</button>}
    </div>
  );
};

export default InputField;

  