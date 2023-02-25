import Navbar from "./components/Navbar";
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

import "./components/claimComponentCSS.css";
import ClaimComponent from "./components/claimComponent";
import ClaimPage from './pages/Claims';
  
// Auth stuff
import setAuthToken from "./utils/authentication";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Redux stuff
import store from "./store";
import { connect } from "react-redux";

function App() {
    const navigate = useNavigate();

    // Check for token to keep user logged in
    if (localStorage.accessToken) {
        // Set auth token header auth
        const token = localStorage.accessToken;
        setAuthToken(token); // Set token for every request

        // Check for expired token
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (localStorage.expiry < currentTime) {
            // Logout user
            store.dispatch(logoutUser());

            // Redirect to login
            // window.location.href = "./login";
            navigate("/login");
        }

        // Set user and isAuthenticated
        const decoded = { EmployeeId: localStorage.EmployeeId, role: localStorage.role };
        store.dispatch(setCurrentUser(decoded));
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/claims" element={<ClaimPage />}></Route>
            </Routes>
        </div>
    );

}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
