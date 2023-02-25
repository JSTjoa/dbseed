import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authentication";
import { useNavigate } from "react-router-dom";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token); // Set token for every request

    // Decode token and get user info and exp
    const decoded = jwt_decode(token);

    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user

        // Redirect to login
        window.location.href = "./login";
    }

    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded, false));

    // Set user academic info
    store.dispatch(initialSettings());
}

function App() {
    return (
        <Router>
            <div className="App">
                <Login />
            </div>
        </Router>
    );
}

export default App;
