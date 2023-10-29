// src/components/Signup.js
import React, { useState } from 'react';
import  axiosInstance  from '../utils/axiosInstance';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axiosInstance.post('http://127.0.0.1:3000/api/signup', {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
          username,
        },
      });

     localStorage.setItem('token', response.data.token);
    
    console.log('Signup successful', response.data);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
