import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../components/NavigationBar";

function CreditApplicationForm(){
    return(
        <>
        <NavigationBar/>
        <Container style = {{marginTop : '30px'}}>
        <h2>Fill Application Form</h2><br/>
            <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
        </Container>
        </>
    );
}

export default CreditApplicationForm;