import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='hero-container'>
        <h1>Hello, User</h1>
        <p>What do you want to do today?</p>
        <div className='hero-btns'>
            <Button 
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            GET STARTED
            </Button>
        </div>
      </div>
  )
}

export default Dashboard;