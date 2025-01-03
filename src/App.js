import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from "./components/Header";
import Banner from "./components/banner";
import Home from './pages/Home'; // Import komponen Home
import About from './pages/About'; // Import komponen About
import Services from './pages/Services'; // Import komponen Services
import Ideas from './pages/Ideas'; // Import komponen Ideas
import Careers from './pages/Careers'; // Import komponen Careers
import Contact from './pages/Contact'; // Import komponen Contact
import UnderConstruction from "./pages/UnderConstruction";
import bannerImage from "./components/5650390.jpg";
import "./App.css";

const App = () => {
  return (
    <Router> {/* Bungkus seluruh aplikasi dengan Router */}
      <div className="App">
        <Header />
        <Banner imageUrl={bannerImage} />
        <Routes> {/* Definisikan rute di dalam Routes */}
          <Route path="/" element={<Home />} /> {/* Rute untuk Home */}
          <Route path="/about" element={<About />} /> {/* Rute untuk About */}
          <Route path="/services" element={<Services />} /> {/* Rute untuk Services */}
          <Route path="/ideas" element={<Ideas />} /> {/* Rute untuk Ideas */}
          <Route path="/careers" element={<Careers />} /> {/* Rute untuk Careers */}
          <Route path="/contact" element={<Contact />} /> {/* Rute untuk Contact */}
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
