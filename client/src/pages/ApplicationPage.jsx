import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../components/NavigationBar";
import { Button } from "react-bootstrap";

function CreditApplicationForm(){
    return(
        <>
        <NavigationBar/>
        <Container style = {{marginTop : '30px'}}>
        <h2>Fill Your Particulars without any mistakes</h2><br/>
            <Form>
                <Row className="mb-3">
                    <Form.Group as = {Col}>
                    <Form.Control placeholder="First name" /><br/>
                    </Form.Group>
                    <Form.Group as = {Col}>
                    <Form.Control placeholder="Last name" /><br/>
                    </Form.Group>   
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Select defaultValue="Choose your gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Form.Select><br/>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <Form.Control placeholder="Date of Birth"/><br/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Address"/><br/>
                    </Form.Group>                   
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                        <Form.Control placeholder="City"/><br/>      
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Select defaultValue="Choose..." name="state" placeholder="Choose gender">
                            <option >Karnataka</option>
                            <option>Tamil Nadu</option>
                            <option>Kerala</option>
                            <option>Andhra Pradesh</option>
                            <option>Maharastra</option>
                            <option>Telangana</option>
                            <option>Madhya Pradesh</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="ZipCode"/><br/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Country"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Annual Income"/><br/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Select defaultValue="Choose">
                            <option>Single</option>
                            <option>Married</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Aadhar Number"/><br/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control placeholder="Pan Card Number"/>
                    </Form.Group>
                </Row>
                <Form.Group>
                <Button variant="success">Submit</Button>
                </Form.Group>
            </Form>
        </Container>
        </>
    );
}

export default CreditApplicationForm;