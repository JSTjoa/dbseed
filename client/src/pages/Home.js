import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home(props) {
    const navigate = useNavigate();

    return (
        <>
            <HeroSection />
        </>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Home);
