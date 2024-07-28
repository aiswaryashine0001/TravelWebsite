// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img2.jpg'; 
import '../App.css'; 
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';


function Home() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    console.log('Book button clicked');
    navigate('/book'); 
  };

  return (
    <div>
      <div className="app">
        <div className="overlay">
          <div className='flex'>
            <img src={logo} alt="Voyage Logo" className="logo" />
            <h1 className='me'>Voyage</h1>
          </div>
          <div className='text'>
            <h1>Time for your</h1>
            <h2>next adventure</h2>
            <h3>Let us plan it with you</h3>
            <button onClick={handleBookClick} className="button">Book Now</button>
          </div>
        </div>
      </div>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default Home;
