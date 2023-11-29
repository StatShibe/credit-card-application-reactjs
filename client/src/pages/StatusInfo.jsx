import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/Container";
import ApplicationCard from "../components/StatusCard";

function InfoDisplay(){
    return(
        <>
        <body style={{height : '100vh'}}>
            <NavigationBar/>
            <Container style={{padding : '20px'}}>
            <div>
                <h2>Your Applications</h2>
            </div>
            <div style={{display : 'flex', justifyContent : 'space-around', flexDirection : 'column'}}>
                <ApplicationCard
                    status = 'Accepted'
                />
                <ApplicationCard
                    status = 'Rejected'
                />
                <ApplicationCard
                    status = 'Pending'
                />
            </div>
            </Container>   
            </body>   
        </>
        
            
    );
}

export default InfoDisplay;