import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/ui/Home";
import About from "./components/ui/About";
import DailyDeals from "./components/ui/DailyDeals";
import Gallery from "./components/ui/Gallery";
import LoginSignUp from "./components/ui/Login-SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="DailyDeals" element={<DailyDeals />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Login-SignUp" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
