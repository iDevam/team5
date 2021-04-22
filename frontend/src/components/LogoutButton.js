import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&(
            <Button variant="outline-light mr-2" onClick={() => logout() }>
                Logout
            </Button>
        )
        
    )
}
export default LogoutButton;