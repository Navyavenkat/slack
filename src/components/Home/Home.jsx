import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <>
      <header>
        <h1 className='logo'>Slack</h1>
        <nav className='nav'>
          <a href='#'>Features</a>
          <a href='#'>Solutions</a>
          <a href='#'>Enterprises</a>
          <a href='#'>Resources</a>
          <a href='#'>Pricing</a>   
          <button className='btnlo-popup' onClick={handleGetStartedClick}>Get Started</button>
        </nav>
      </header>
    </>
  );
}

export default Home;
