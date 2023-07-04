import { Link } from "react-router-dom";
import './navbar.css';
import React, { useState } from "react";

export default function Navbars() {
  

  return (
    
    <div className="Navbars">
      <div className="Logo"><h1>@roberts</h1></div>
      
      <ul >
        <li><Link to="/" className="Link">HOME</Link></li>
        <li><Link to="/about" className="Link">ABOUT </Link></li>
        <li><Link to="/contact" className="Link">CONTACT</Link></li>
        <li><Link to="/project" className="Link"> PROJECTS</Link></li>
      </ul>
    </div>
  );
}
