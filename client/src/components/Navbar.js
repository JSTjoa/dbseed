import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { connect } from "react-redux";

function Navbar(props) {
    const navigate = useNavigate();

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    const handleLogout = () => {
        props.logoutUser();
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="images/dbs_logo.svg" />
                    </Link>
                    {button && (
                        <Button buttonStyle="btn--primary" onClick={handleLogout}>
                            Logout <i className="fa-solid fa-lock"></i>
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Navbar);
