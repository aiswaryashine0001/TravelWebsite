import React from 'react';
import './Book.css';
import img1 from '../assets/img7.jpg';
import img2 from '../assets/img8.jpg';
import img3 from '../assets/img9.jpg';
import img4 from '../assets/img10.jpg';
import img5 from '../assets/img11.jpg';
import img6 from '../assets/img12.jpg';
import img7 from '../assets/img13.jpg';
import img8 from '../assets/img14.jpg';


function Book() {
  return (
    <div>
      <h1 className='head'>Explore!!</h1>
      <section id="book">
        <h2></h2>
        <div className="places-grid">
          <div className="place">
            <h3>St. George Syro-Malabar Catholic Forane Church, Edappally, Ernakulum</h3>
            <a href="https://maps.app.goo.gl/gthffiY9jT7ZkwPg9" target="_blank" rel="noopener noreferrer">
              <img src={img1} alt="Place 1" />
            </a>
            <p>St. George's Syro-Malabar Forane Church, locally known as Edapally Church is a Catholic pilgrimage church in Edapally, Kochi, India. It is considered Asia's largest shrine dedicated to Saint George, about five million people visit it every year. The church is thought to have been founded in 593 AD.</p>
          </div>
          <div className="place">
            <h3>Hill Palace, Tripunithura, Ernakulam</h3>
            <a href="https://maps.app.goo.gl/UjBGwCvkZXeHSaeJ9" target="_blank" rel="noopener noreferrer">
              <img src={img2} alt="Place 2" />
            </a>
            <p>Hill Palace is an archaeological museum and palace located in the Thrippunithura neighbourhood of Kochi, Kerala. It is the largest archeological museum in the state and was the imperial administrative office and official residence of the Cochin Maharaja.</p>
          </div>
          <div className="place">
            <h3>Cherai Beach,<br/> Kochi, Ernakulum</h3>
            <a href="https://maps.app.goo.gl/j1EuPcboXTCPJ24G7" target="_blank" rel="noopener noreferrer">
              <img src={img3} alt="Place 3" />
            </a>
            <p>Cherai Beach is located in Cherai in the northern side of Vypin Island, a suburb of the city Kochi in the state of Kerala, India. One of the most visited beaches in the state, it is situated at around 25 km from downtown Kochi and 20 km from Cochin International Airport.</p>
          </div>
          <div className="place">
            <h3>Athirapally Waterfalls, Chalakudy, Thrissur</h3>
            <a href="https://maps.app.goo.gl/CyPAQbbxRHBti8GF7" target="_blank" rel="noopener noreferrer">
              <img src={img4} alt="Place 4" />
            </a>
            <p>Athirapilly Falls is situated in vali Athirapilly Panchayat in Chalakudy Taluk of Thrissur District in Kerala, India on the Chalakudy River, which originates from the upper reaches of the Western Ghats at the entrance to the Sholayar ranges. It is the largest waterfall in Kerala, which stands tall at 81.5 feet.</p>
          </div>
          <div className="place">
            <h3>Sakthan Thampuran Palace, Chembukkav, Thrissur</h3>
            <a href="https://maps.app.goo.gl/b5KcjdDiiq5wzMGc7" target="_blank" rel="noopener noreferrer">
              <img src={img5} alt="Place 5" />
            </a>
            <p>Shakthan Thampuran Palace is situated in the city of Thrissur in Kerala state, India. It is named as Vadakkekara Palace, was reconstructed in Kerala-Dutch style in 1795 by Ramavarma Thampuran of the erstwhile Princely State of Cochin, well as Sakthan Thampuran is preserved by Archaeological Department.</p>
          </div>
          <div className="place">
            <h3>Kerala Kalamandalam, Cheruthuruthi, Thrissur</h3>
            <a href="https://maps.app.goo.gl/jPuj6y9PANbYARrG8" target="_blank" rel="noopener noreferrer">
              <img src={img6} alt="Place 6" />
            </a>
            <p>Kerala Kalamandalam, a deemed-to-be-University of Art and Culture by the Government of India, is a major centre for learning Indian performing arts, especially those that developed in the country's southern states, with special emphasis on those from Kerala.</p>
          </div> 
          <div className="place">
            <h3>Wayanad,<br/>Kerala</h3>
            <a href="https://maps.app.goo.gl/2fVC3M17FsXFUc186" target="_blank" rel="noopener noreferrer">
              <img src={img7} alt="Place 7" />
            </a>
            <p>It is the only plateau in Kerala. The Wayanad Plateau forms a continuation of the Mysore Plateau, the southern portion of Deccan Plateau. It is set high in the Western Ghats with altitudes ranging from 700 to 2,100 meters.</p>
          </div> 
          <div className="place">
            <h3>Marari Beach,<br/>Alappuzha</h3>
            <a href="https://maps.app.goo.gl/tG3NKUQA7jdCmU2J8" target="_blank" rel="noopener noreferrer">
              <img src={img8} alt="Place 8" />
            </a>
            <p>Marari Beach, a secluded little known beach destination in the Alappuzha, is located about 11 km from Alappuzha town. The fisherfolk of Mararikulam and their gentle ways of life are some of the attractions here. An evening stroll is one of the best hangouts here.</p>
          </div> 
        </div>
      </section>
    </div>
  );
}

export default Book;
