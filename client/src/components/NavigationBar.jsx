import React from "react";
import Container from 'react-bootstrap/Container'
import {BiLogOut} from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize : '30px'}}>Vault</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard">Home</Nav.Link>
            <Nav.Link href="/Application">Your Applications</Nav.Link>
            <Nav.Link href="/Info">Info</Nav.Link>
            
          </Nav>
          <Nav><Nav.Link href = "/" className='fw-bold'>Logout<BiLogOut style = {{fontSize : '20px',marginLeft : '5px'}}/></Nav.Link></Nav>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;