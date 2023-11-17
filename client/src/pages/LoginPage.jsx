import React from "react";
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function LoginPage(){
    return( 
        <div style={{alignContent : 'center'}}>
          <Navbar bg = "dark" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
        <Card style={{marginTop : '70px', width : '500px',justifyContent : 'center'}}>
            <Card.Header>Login to Continue</Card.Header>
            <Card.Body>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel> 
      <br/>
      <Button variant = 'primary' style={{marginLeft : '400px'}}>Login</Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default LoginPage;
