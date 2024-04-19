import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dark-logo.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="App">
      <div className="login-container">
      <img src={logo} alt="logo" />
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
          Already registered yet? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
