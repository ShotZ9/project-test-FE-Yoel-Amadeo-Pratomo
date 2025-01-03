import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "./Header.css";
import logo from "./suitmediapng.png";

const Header = () => {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
    lastScrollY = window.scrollY;

    // Update scrolled state only when scrolling up
    if (window.scrollY > 0 && window.scrollY < lastScrollY) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header className={`header ${show ? "show" : "hide"} ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <img src={logo} alt="Suitmedia Logo" className="logo" />
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>Services</NavLink></li>
          <li><NavLink to="/ideas" className={({ isActive }) => isActive ? 'active' : undefined}>Ideas</NavLink></li>
          <li><NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : undefined}>Careers</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;