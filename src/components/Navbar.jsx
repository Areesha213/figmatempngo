// src/components/Navbar.js
import { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import custom styles

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar text-white">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <button className="toggle-button text-white" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <ul className={`menu ${isMenuOpen ? 'active' : ''} `}>
        <li className="menu-item text-white">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="menu-item text-white">
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li className="menu-item">
          <Link to="/media">Media</Link>
        </li>
        <li className="menu-item">
          <Link to="/event-read-more">Events</Link>
        </li>
        <li className="menu-item">
          <Link to="/project-read-more">Projects</Link>
        </li>
        <li className="menu-item">
          <Link to="/what-we-do">What We Do</Link>
        </li>
        <li className="menu-item">
          <Link to="/donation" className="donation">Donation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
