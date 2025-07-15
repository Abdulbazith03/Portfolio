import React from 'react';
import './port.css'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
// import Port from './port1';

const Portfolio = ()=>{ 
    return(

     <Navbar expand="lg" className="bg-black navbar-dark py-3">
      <Container>
        <Navbar.Brand href="#" className="fs-2 fw-normal">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="mx-2 text-white">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2 text-white">About Me</Nav.Link>
            <Nav.Link href="#skills" className="mx-2 text-white">Skills</Nav.Link>
            <Nav.Link href="#projects" className="mx-2 text-white">Projects</Nav.Link>
            <Nav.Link href="#education" className="mx-2 text-white">Education</Nav.Link>
            <Button variant="light" className="ms-3 px-4 rounded-pill shadow-sm" href="#contact">
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


     
    );
}

export default Portfolio;