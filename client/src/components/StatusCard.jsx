import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function setColor(status){
    if (status === 'Accepted'){
        return 'green';
    }
    else if (status === 'Rejected'){
        return 'red';
    }
    else
        return 'grey';
}

function ApplicationCard(props){
    return(
        
        <>
        <Card style={{width : '500px', marginTop : '20px'}}>
                    <Card.Header>Application Number</Card.Header>
                    <Card.Body>This application is under sprocess</Card.Body>
                    <Card.Footer style={{color : setColor(props.status),fontWeight : 'bold'}}>{props.status}&emsp;
                    <Button className = 'Warning'>Edit</Button>
                    </Card.Footer>
        </Card>
    </>
    );
}

export default ApplicationCard;