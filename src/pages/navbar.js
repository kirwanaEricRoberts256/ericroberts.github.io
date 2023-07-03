import { Link } from "react-router-dom";
import './navbar.css';
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <div className="Logo"><h1>@roberts</h1></div>
      <button className={`Hamburger ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <span className="Hamburger-line"></span>
        <span className="Hamburger-line"></span>
        <span className="Hamburger-line"></span>
      </button>
      <ul className={`Navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className="Link">HOME</Link></li>
        <li><Link to="/about" className="Link">ABOUT ME</Link></li>
        <li><Link to="/contact" className="Link">Contact</Link></li>
        <li><Link to="/project" className="Link">My projects</Link></li>
      </ul>
    </div>
  );
}
