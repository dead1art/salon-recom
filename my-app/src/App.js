import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Components
import  Navbar from './components/Navbar/Navbar';

//Navbar components
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import DailyDeals from './components/Navbar/DailyDeals';
import Gallery from './components/Navbar/Gallery';
import LoginSignUp from './components/Navbar/Login-SignUp';




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
