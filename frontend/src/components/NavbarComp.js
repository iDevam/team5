


import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export const NavbarComp = () => {

return (
    <>

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">OnlineStudyPortal</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create Session</Nav.Link>
            <Nav.Link href="/list">List Session</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
       
            <LogoutButton  />
            <LoginButton />


          </Form>
        </Navbar>


    </>
    )
}
export default NavbarComp;