import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './components/claimComponentCSS.css'
import Home from './pages/Home';
import ClaimComponent from './components/claimComponent';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element= {<Home/>} />
        <Route path = '/claims' element = {<ClaimComponent/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
