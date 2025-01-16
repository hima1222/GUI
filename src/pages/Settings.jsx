import React, { useState } from 'react';
import './Settings.css';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    username: 'Hhs_200222',
    email: 'himarasmaranayake@gmail.com',
    dateOfBirth: '2002-12-22',
    joinBeta: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to update account settings
    console.log('Updated account settings:', formData);
    alert('Account settings updated successfully!');
  };

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="joinBeta"
              checked={formData.joinBeta}
              onChange={handleChange}
            />
            Join Beta Program
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountSettings;
