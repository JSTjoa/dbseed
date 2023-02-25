import React from 'react';
import '../App.css';
import Dashboard from '../components/Dashboard';
import ClaimComponent from '../components/claimComponent';

function Home () {
    return (
        <>
        <Dashboard />
        <ClaimComponent />
        </>
    )
}

export default Home;