import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import About from './pages/view';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <>
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/view' element={<About/>} />
      </Routes>
    </Router>
    </div>
  </>
  );
}

export default App;
