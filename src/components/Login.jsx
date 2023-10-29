// src/components/Login.js

import React, { useState } from 'react';
import  axiosInstance  from '../utils/axiosInstance';

function Login() {
  const [ username, setUsername ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post('http://127.0.0.1:3000/api/login', {
        email,
        password,
        username
    });
     localStorage.setItem('token', response.data.token);

    console.log('Login successful', response.data);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
