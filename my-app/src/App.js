import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Gallery from "./components/ui/Gallery";
import LoginSignUp from "./components/ui/Login-SignUp";
import Page from "./pages/singlePage/Page";
import ReviewForm from "./pages/singlePage/ReviewForm";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Login-SignUp" element={<LoginSignUp />} />
          <Route path="/Page/:id" element={<Page />} />
          <Route path="/ReviewForm" element={<ReviewForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
