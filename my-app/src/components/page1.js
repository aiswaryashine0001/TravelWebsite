import React from 'react';
import './page1.css';
import img from '../assets/img3.jpg';

const Page1 = () => {
  return (
    <div className="page1">
      <div className='flex2'>
        <div className='text1'>
        <h1>Travel Made Easy</h1>
      <p>Traveling is easier than ever with our help. From booking to exploring, we simplify every step. Get personalized recommendations and essential information to make your trip smooth and enjoyable. Discover new places without the hassle, making your travel experience truly effortless.</p>
      <p>Travel opens our hearts and minds to the world's beauty, allowing us to experience new cultures, flavors, and landscapes. Each journey is a unique adventure, filled with moments of awe and discovery. As we explore distant places, we create lasting memories and connect with the essence of humanity, finding joy and inspiration in every corner of the globe.</p>
      </div>
      <img src={img} alt="location photo" className="photo" />
      </div>
    </div>
  );
};

export default Page1;
