// client/src/components/SignupPage.js
import React, { useState } from 'react';
import axios from 'axios';

const HostSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/hosts/signup', { username, password, name, email });
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-page">
      <h2>Host Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default HostSignup;
