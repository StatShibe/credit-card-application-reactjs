import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../components/NavigationBar";
import { Button, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import Card from "react-bootstrap/Card"

const style = {
    marginTop : '30px',
    height : '100vh',
    width : '300vh',
    borderRadius : '20px',
    padding : '20px',
};

function CreditApplicationForm(){

    const [application, setApplication] = useState({
        firstname : '',
        lastname : '',
        dateofbirth : '',
        email : '',
        phno : '',
        martialstatus : '',
        address : '',
        city : '',
        state : '',
        country : '',
        zipcode : '',
        aadharno : '',
        pancardno : ''
    });

    const handleInput = (e) => {
        e.persist();
        setApplication({...application, [e.target.name]: e.target.value})
    }
    
    const saveApplication = async(e) => {
        e.preventDefault();
        console.log(application);

        try { 
            const response = await axios.post('http://localhost:3001/user/formupdate', application,{
                headers: {
                    'Content-Type': `multipart/form-data`,
                }, 
                withCredentials:true,
            });
            console.log('Form data submitted successfully');
            // You can reset the form or perform other actions here
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };
    return(
        <>
        <NavigationBar/>
        <Container style = {style}>
        <h2>Fill Your Particulars without any mistakes</h2><br/>
            <Form onSubmit={saveApplication}>
                <Row className="mb-3">
                    <Form.Group as = {Col}>
                    <FloatingLabel label = "First Name" className = "mb-3">
                    <Form.Control placeholder="First name" name = "firstname" value={application.firstname} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as = {Col}>
                    <FloatingLabel label = "Last Name" className = "mb-3">
                    <Form.Control placeholder="Last name" name = "lastname" value={application.lastname} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>   
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Gender" className="mb-3">
                    <Form.Select defaultValue="Choose your gender" name = "gender" value={application.gender} onChange={handleInput}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Date of Birth" className = "mb-3">
                    <Form.Control placeholder="Date of Birth" type = 'date' name = "dateofbirth" value={application.dateofbirth} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Address" className = "mb-3">
                    <Form.Control placeholder="Address" name = "address" value={application.address} onChange={handleInput}/><br/>
                    </FloatingLabel>
                    </Form.Group>                   
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3">
                    <FloatingLabel label = "City" className = "mb-3">
                    <Form.Control placeholder="City" name = "city" value={application.city} onChange={handleInput}/>
                    </FloatingLabel>      
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FloatingLabel label = "State" className="mb-3">
                        <Form.Select defaultValue="Choose..." name="state" placeholder="State"  value={application.state} onChange={handleInput}>
                            <option >Karnataka</option>
                            <option>Tamil Nadu</option>
                            <option>Kerala</option>
                            <option>Andhra Pradesh</option>
                            <option>Maharastra</option>
                            <option>Telangana</option>
                            <option>Madhya Pradesh</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Country" className = "mb-3">
                    <Form.Control placeholder="Country" name = "country" value={application.country} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Zip Code" className = "mb-3">
                    <Form.Control placeholder="Zip Code" name = "zipcode" value={application.zipcode} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Phone Number" className = "mb-3">
                    <Form.Control placeholder="Phone Number" name = "phno" value={application.phno} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Email ID" className = "mb-3">
                    <Form.Control placeholder="Email ID" type = "email" name = "email" value={application.email} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Martial Status" className="mb-3">
                    <Form.Select defaultValue="Choose" name = "martialstatus" value={application.martialstatus} onChange={handleInput}>
                            <option>Single</option>
                            <option>Married</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Aadhar Number" className = "mb-3">
                    <Form.Control placeholder="Aadhar Number" name = "aadharno" value={application.aadharno} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col}>
                    <FloatingLabel label = "Pan Number" className = "mb-3">
                    <Form.Control placeholder="Pan Number" name = "pancardno" value={application.pancardno} onChange={handleInput}/>
                    </FloatingLabel>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group role="form">
                    <Button className="btn btn-primary btn-large centerButton" type="submit">Submit</Button>
                </Form.Group>
                </Row>
            </Form>
        </Container>
        </>
    );
}

export default CreditApplicationForm;