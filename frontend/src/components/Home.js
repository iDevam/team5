
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export const CreateSession = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    function Greeting() {
        if (!isAuthenticated){
            return (
                <Button variant="btn btn-primary col-12 mt-3" onClick={() => loginWithRedirect() }>Login / Register</Button>
            )
        }

    }
    
    return (
        <>

            <Row className="justify-content-md-center mt-5">
                <Col xs={12} sm={12} md={8}>
                <Image src="https://www.pngkit.com/png/full/6-60441_welcome-welcome-png.png" className="text-center" fluid />
                </Col>
            
                <Col xs={12} sm={12} md={8}>
               
                {Greeting()}


                        </Col>
            

            </Row> 

            



        </>
    )
}
export default CreateSession;