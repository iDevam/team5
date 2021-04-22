import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export const Loading = () => {
    const { logout } = useAuth0();
    return (
    
        <Row className="justify-content-md-center mt-5">
            <Col xs={12} sm={12} md={8}>
            <Image src="https://cdn.dribbble.com/users/3742211/screenshots/9195657/media/6796a544d6f9ef1293d8d8d9e60d38d5.gif" className="text-center" fluid />
            </Col>
        </Row> 

        
    )
}
export default Loading;