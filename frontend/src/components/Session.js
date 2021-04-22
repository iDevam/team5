
import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import Home from './Home';
import Loading from './Loading';
import Player from './YTPlayer.component';

import {
    useParams
  } from "react-router-dom";

export const Session = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    
    let { id } = useParams();

    console.log(id);

    localStorage.setItem('latestSessionId', id);



    function Greeting() {

        if(isLoading){
            return <Loading />

        }

        if (isAuthenticated){
            return (
               
                <Row className="justify-content-md-center mt-5">
                <Col xs={12} sm={12} md={8}>
                
                <Player />

                </Col>
            
             

            </Row> 



            )
        }else{
            return <Home />
        }

    }

    
    return (
        <>
        <div className="mt-5">           
             {Greeting()}

        </div>

        </>
    )



   
}
export default Session;