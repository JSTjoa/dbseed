import React from 'react';
import '../App.css';
import { Button } from './Button';
import DashCards from './DashCards';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='hero-container'>
        <h1>Hello, User</h1>
        <p>What do you want to do today?</p>
        <DashCards />
    </div>
  )
}

export default Dashboard;