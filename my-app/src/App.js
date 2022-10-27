import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/ui/Home";
import About from "./components/ui/About";
import Gallery from "./components/ui/Gallery";
import LoginSignUp from "./components/ui/Login-SignUp";
import Page from "./pages/singlePage/Page";
import ReviewForm from "./pages/singlePage/ReviewForm";
import BookNow from "./pages/BookNow/BookNow";
import { Busniess } from "./components/ui/Busniess";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Business" element={<Busniess />} />
          <Route path="/Login-SignUp" element={<LoginSignUp />} />
          <Route path="/Page/:id" element={<Page />} />
          <Route path="/ReviewForm" element={<ReviewForm />} />
          <Route path="/BookNow" element={<BookNow />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
