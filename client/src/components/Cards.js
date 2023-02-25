import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>My Claims</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-dbs 2.jpg'
                    text='Create a New Claim'
                    label='New Feature'
                    path='/services'/>
                    <CardItem 
                    src='images/img-dbs 15.jpg'
                    text='Manage Claims'
                    label='New Feature'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;