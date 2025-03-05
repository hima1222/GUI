import React from 'react';
import './Loginform.css';

const Loginform = () => {
  return (
    <div className="container">
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
