import React from 'react';
import '../App.css';
import Dashboard from '../components/Dashboard';
import ClaimComponent from '../components/claimComponent';
import { Button } from '../components/Button';

function Home () {
    return (
        <>
        <Button buttonStyle='btn--back' path='/home'> Back </Button>
        <Dashboard />
        <ClaimComponent />
        </>
    )
}

export default Home;