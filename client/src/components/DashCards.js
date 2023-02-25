import React from 'react';
import CardItem from './CardItem';
import './DashCards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>My Claims</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src='images/img-dbs 2.jpg'
                    text='Pending'
                    label='1'/>
                    <CardItem 
                    src='images/img-dbs 15.jpg'
                    text='Approval'
                    label='3'/>
                    <CardItem 
                    src='images/img-dbs 15.jpg'
                    text='Rejected'
                    label='2'/>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;