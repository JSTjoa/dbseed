import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ClaimComponent from './claimComponent/claimComponent.js'
// see min changes

function App() {
  return (
    <div className="App">
      <div>
      <ClaimComponent></ClaimComponent>
      </div>
    </div>
  );
}

export default App;
