import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authentication";

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
