import React, {useState} from 'react';
import './Loginform.css';

function AuthForm() {
  const [isSignUp, setIsSignUp] = React.useState(false);

  let containerClass = 'container';
  if (isSignUp) {
    containerClass += ' sign-up';
  }

  return (
    <div className={containerClass}>
      <div className="form login">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <p>
          Don’t have an account? <span onClick={() => setIsSignUp(true)}>Register</span>
        </p>
      </div>

      <div className="form signup">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
        <p>
          Already have an account? <span onClick={() => setIsSignUp(false)}>Login</span>
        </p>
      </div>

      <div className="yellow-box"></div>
    </div>
  );
}

export default AuthForm;