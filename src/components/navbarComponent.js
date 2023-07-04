import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function CustomNavbar(){
    return(
        
              <Navbar expand="md" bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Logo</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#about me">About</Nav.Link>
                      <Nav.Link href="#contact">Contact</Nav.Link>
                      <Nav.Link href="#project">Projects</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            )
          }
          

    
