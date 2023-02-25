import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <img src='images/dbs_logo.svg'/>
                </Link>
                {button && 
                <Button buttonStyle='btn--primary'> 
                    Logout <i className ="fa-solid fa-lock"></i> 
                </Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar