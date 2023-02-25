import React from 'react';
import '../App.css';
import { Button } from './Button';
import Cards from './Cards';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>Hello, User</h1>
        <p>What do you want to do today?</p>
        <Cards />
    </div>
  )
}

export default HeroSection;