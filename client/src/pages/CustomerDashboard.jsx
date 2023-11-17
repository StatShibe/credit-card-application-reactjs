import React from "react";
import Container from 'react-bootstrap/Container'

import DisplayCarousel from "../components/DisplayCarousel";
import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard">Home</Nav.Link>
            <Nav.Link href="#features">Your Applications</Nav.Link>
            <Nav.Link href="#pricing">Info</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <DisplayCarousel/>
    </>
  );
}

export default NavigationBar;