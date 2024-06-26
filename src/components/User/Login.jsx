

import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault(); 
    navigate('/dashboard'); 
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLoginSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='email' placeholder='Email' required />
          <FaEnvelope className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className='remember-forget'>
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          <a href='#'>Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className='reg-li'>
          <p>
            Don't have an account? <Link to='/signup'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

