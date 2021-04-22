import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    
    return (
            !isAuthenticated &&(
                <Button variant="outline-light" onClick={() => loginWithRedirect() }>
                    Login / Register
                </Button>
            )
        
    )
}
export default LoginButton;