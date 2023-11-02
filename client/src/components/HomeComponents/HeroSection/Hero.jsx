import React from 'react';
import './Hero.css';
import heroImage from '../../../assets/images/heroImage.png'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='heroContainer'>
      <div className="heroText">
        <div className='heading'>Seamless 
          <span> Immigration </span>
          Solutions Await You
        </div>

          <Link>Explore Now</Link>
      </div>
      <div className="heroImage">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero