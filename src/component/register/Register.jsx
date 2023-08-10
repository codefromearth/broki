import React, { useState } from 'react';
import './style.css'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     // Perform validation
     if (!name || !email || !password || password !== confirmPassword) {
        setError('Please fill in all fields and ensure passwords match');
        return;
      }
      if (!isValidEmail(email)) {
        setError('Please enter a valid email address');
        return;
      }
      if (!isValidPassword(password)) {
        setError(
          'Password must be at least 8 characters long and contain at least one letter and one number'
        );
        return;
      }

      localStorage.setItem('user', JSON.stringify({ email, password }));


    setError(''); // Clear errors if successful
    navigate('/')
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <p>New user Register yourself </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className='signup-btn'>Signup</button>
      </form>

      <Link to="/">Alredy user Signin</Link>
      
    </div>
  );
};

export default Register;
