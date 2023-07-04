import { Link } from "react-router-dom";
import './navbar.css';
import React, { useState } from "react";
import {Navbar, Nav, Container} from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


export default function Navbars() {
  

  return (
    
    <div className="Navbars">
      <div className="Logo"><h1>@roberts</h1></div>
      <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
      <ul >
        <li><Link to="/" className="Link">HOME</Link></li>
        <li><Link to="/about" className="Link">ABOUT ME</Link></li>
        <li><Link to="/contact" className="Link">CONTACT</Link></li>
        <li><Link to="/project" className="Link">MY PROJECTS</Link></li>
      </ul>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
    
  );
}
