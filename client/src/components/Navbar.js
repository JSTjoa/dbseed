import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const navigate = useNavigate();
    const handleNavigate = () => { navigate("/logout")}

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
                <div className='menu-icon' onClick ={handleClick}>
                    <i className = {click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className = 'nav-item'>
                        <p className = 'nav-links' onClick = {closeMobileMenu}>
                            test
                        </p>
                    </li>
                    <li className = 'nav-item'>
                        <p className = 'nav-links' onClick = {closeMobileMenu}>
                            test
                        </p>
                    </li>
                    <li className = 'nav-item'>
                        <p className = 'nav-links' onClick = {closeMobileMenu}>
                            test
                        </p>
                    </li>
                    <li className = 'nav-item'>
                        <p className = 'nav-links-mobile' onClick = {closeMobileMenu}>
                            test
                            
                        </p>
                    </li>
                </ul>
                {button && 
                <Button buttonStyle='btn--primary' logoutMethod={handleNavigate}>   
                    Logout <i className ="fa-solid fa-lock-open"></i>
                </Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar