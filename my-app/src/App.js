import React from 'react';
import './App.css';
import logo from './assets/img2.jpg'; 
import Page1 from './components/page1'; 
import Page2 from './components/page2'; 
import Page3 from './components/page3'; 

function App() {
  return (
    <div>
    <div className="app">
      <div className="overlay">
        <div className='flex'>
          <img src={logo} alt="Voyage Logo" className="logo" />
          <h1>Voyage</h1>
        </div>
        <div className='text'>
          <h1>Time for your</h1>
          <h2>next adventure</h2>
          <h3>Let us plan it with you</h3>
          <a href="#book" className="button">Book Now</a>
        </div>
      </div>
    </div>
    <Page1 /> 
    <Page2 />
    <Page3 />
    </div>
  );
}

export default App;
