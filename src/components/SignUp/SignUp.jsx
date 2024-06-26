
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import { FaUser, FaLock, FaEnvelope} from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className='input-box'>
          <input type='text' placeholder='Name' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='email' placeholder='Email' required />
          <FaEnvelope className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
