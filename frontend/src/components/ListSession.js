import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Loading from './Loading';
import SessionList from './table-session.component';


export const ListSession = () => {

    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    function Greeting() {
        if(isLoading){
            return <Loading />

        }

        if (isAuthenticated){
            return (
                
                <SessionList />



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
export default ListSession;