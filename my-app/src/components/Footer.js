import React from 'react';
import './Footer.css';
import img from '../assets/img2.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>"Discover joy in every journey. Explore new horizons and create unforgettable memories with us."</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@voyage.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className='footer-2'>
        </div><div className="footer-section">
          <h4>Voyage</h4>
          <div className="social-links">
            <img src={img} alt="" className='footer-1'/>
          </div>
      </div>
     </div>
      <div className="footer-bottom">
        &copy; 2024 Voyage | Designed by Athira & Aiswarya
      </div>
    </footer>
  );
}

export default Footer;
