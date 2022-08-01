import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import  Navbar from './components/Navbar';


import Home from './components/Home';
import About from './components/About';
import DailyDeals from './components/DailyDeals';
import Gallery from './components/Gallery';
import LoginSignUp from './components/Login-SignUp';




function App() {
  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
        <Route exact path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='DailyDeals' element={<DailyDeals />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Login-SignUp' element={<LoginSignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
