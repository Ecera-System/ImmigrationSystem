import React from 'react';
import './Hero.css';
import heroImage from '../../../assets/images/heroImage.png'

function Hero() {
  return (
    <div className='heroContainer'>
        <div className="heroText">Hero Text</div>
        <div className="heroImage">
            <img src={heroImage} alt="Hero" />
        </div>
    </div>
  )
}

export default Hero