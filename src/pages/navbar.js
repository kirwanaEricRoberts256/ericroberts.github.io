import { Link } from "react-router-dom";
import './navbar.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Navbar">
      <div className="Logo"><h1>@roberts</h1></div>
      <button className={`Hamburger ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`Navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" className="Link">HOME</Link></li>
        <li><Link to="/about" className="Link">ABOUT ME</Link></li>
        <li><Link to="/contact" className="Link">CONTACT</Link></li>
        <li><Link to="/project" className="Link">MY PROJECTS</Link></li>
      </ul>
    </div>
  );
}
