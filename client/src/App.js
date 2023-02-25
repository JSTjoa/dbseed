import Navbar from "./components/Navbar";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

// Auth stuff
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authentication";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Redux stuff
import store from "./store";
import { connect } from "react-redux";

function App() {
    const navigate = useNavigate();

    // Check for token to keep user logged in
    if (localStorage.jwtToken) {
        // Set auth token header auth
        const token = localStorage.jwtToken;
        setAuthToken(token); // Set token for every request

        console.log("token found");
        // Decode token and get user info and exp
        const decoded = jwt_decode(token);

        // Check for expired token
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (decoded.exp < currentTime) {
            // Logout user
            store.dispatch(logoutUser());

            // Redirect to login
            // window.location.href = "./login";
            navigate("/login");
        }

        // Set user and isAuthenticated
        store.dispatch(setCurrentUser(decoded));
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/login" exact element={<Login />} />
            </Routes>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
