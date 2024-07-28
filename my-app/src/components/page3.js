import React from 'react';
import './page3.css';
import img from '../assets/img6.jpg';

const Page1 = () => {
  return (
    <div className="page1">
      <div className='flex2'>
        <div className='text1'>
        <h1>Find Happiness in Traveling</h1>
        <p>Experience the wonder of exploring new destinations and cultures, adding excitement and joy to your life. Meet new people, share stories, and create lasting friendships that enrich your journey. Leave daily routines behind and embrace the freedom to explore, rejuvenating your spirit. Try new activities and explore off-the-beaten-path locations, filling your travels with excitement. Capture unforgettable moments and create cherished memories that bring happiness long after the trip. Escape the hustle of everyday life, finding tranquility in serene beaches or peaceful mountains. The thrill of adventure, the beauty of nature, and the richness of cultures all spark joy and fulfillment.</p>
      </div>
      <img src={img} alt="location photo" className="photo" />
      </div>
    </div>
  );
};

export default Page1;
