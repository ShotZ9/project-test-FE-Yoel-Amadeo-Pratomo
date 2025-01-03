import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/banner";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Ideas from './pages/Ideas';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import UnderConstruction from "./pages/UnderConstruction";
import bannerImage from "./components/5650390.jpg";
import "./App.css";
import { FaArrowUp } from 'react-icons/fa';

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Banner imageUrl={bannerImage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>

        {/* Floating button */}
        {showButton && (
          <button onClick={scrollToTop} className="floating-button">
            <FaArrowUp />
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;