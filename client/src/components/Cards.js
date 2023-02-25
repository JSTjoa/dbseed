import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import ClaimForm from './ClaimForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClaimComponent from './claimComponent';


function Cards() {
  return (
    <div className='cards'>
        <Routes>
          <Route path="/create" element={<ClaimForm/>}/>
          <Route path="/claim" element={<ClaimComponent/>}/>
        </Routes>
        <h1>My Claims</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-dbs 2.jpg'
                    text='Create a New Claim'
                    label='New Feature'
                    path='/create'/>
                    <CardItem 
                    src='images/img-dbs 15.jpg'
                    text='Manage Claims'
                    label='New Feature'
                    path='/claims'/>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;