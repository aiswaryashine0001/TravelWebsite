import React from 'react';
import './Page2.css';
import img from '../assets/img4.jpg';

const Page2 = () => {
  return (
    <div className="page2">
        <img src={img} alt="" className='ride'/>
        <div className='para'>
      <h1>Embrace the Journey</h1>
      <p>Travel allows us to break free from the routine and embrace the unknown. It's a chance to immerse ourselves in new cultures, savor exotic flavors, and marvel at the natural beauty of the world. Each trip enriches our lives, filling our hearts with joy and our minds with inspiration.</p>
      <p1>Explore unique destinations, engage with locals, and experience life from a fresh perspective.Indulge in local cuisines, from sushi in Japan to street food in Thailand, each dish telling a regional story.Hike lush rainforests, relax on pristine beaches, and awe at majestic mountains. Nature’s beauty offers endless adventure.Capture stunning photos, meet new friends, and experience moments that stay with you forever.Travel sparks creativity and broadens horizons, fueling your passion and drive.</p1>
      </div>
    </div>
  );
};

export default Page2;
