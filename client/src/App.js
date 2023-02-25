import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authentication";
// see min changes

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
