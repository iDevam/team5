import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import InputGroup from 'react-bootstrap/InputGroup';


import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Loading from './Loading';
import CreateSess from './create-session.component';

export const CreateSession = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();


        
    function Greeting() {

        if(isLoading){
            return <Loading />

        }

        if (isAuthenticated){
            return (
                <CreateSess />
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
export default CreateSession;