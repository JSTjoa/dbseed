import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// see min changes

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' element= {<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
