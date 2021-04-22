import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import axios from 'axios';
import Home from './Home';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Loading from './Loading';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})
const token = "abc123";


export const Profile = () => {
    const { user } = useAuth0();



    if(user){
     
    api.post('/users/register?firstname='+user["given_name"]+'&email='+user["email"]+'&lastname='+user["family_name"]+'&picture='+user["picture"],  { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            console.log(res.data);
        })   
        localStorage.setItem('sessionEmail', user["email"]);

    }


    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    function Greeting() {

        if(isLoading){
            return <Loading />

        }

        if (isAuthenticated){
            return (
                <div className="mt-5">
                {/* <JSONPretty data={user}></JSONPretty> */}
                {/* { JSON.stringify(user)} */}


                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user['picture']} />
                <Card.Body>
                    <Card.Title>{user["given_name"]} {user["family_name"]}</Card.Title>
                    <Card.Text>
                    {user["email"]}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                </Card>



            </div>                )
        }else{
            return <Home />
        }

    }
    return (
        <>
            {Greeting()}
        </>
    )



}

export default Profile;