import React, { useState } from 'react';

import './style.css'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Perform validation
    if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }

      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        setError('');
        navigate('/home'); // Redirect to home page if login is successful
      } else {
        setError('Invalid email or password');
      }

  };



  return (
    
    <div className='main-container'>
    <div className='header-login'>
    <h2 >Get started</h2>
    <p>Fill the form to Login</p>
    </div>
    
    <form className='form-conatiner'  onSubmit={handleSubmit} >
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className='login-button' type="submit">Login</button>
    </form>

    <div className='flex-link'>
      <Link to="/register" className='link'>Register now</Link>
      <Link to="/" className='link'>Forgate password</Link>
      
      </div>

  </div>
  
  );
};

export default Signin;
