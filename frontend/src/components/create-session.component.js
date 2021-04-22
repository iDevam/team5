import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';



export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.onChangeSessionName = this.onChangeSessionName.bind(this);
        this.onChangeSessionTopic= this.onChangeSessionTopic.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
       

        this.onChangeUserPublic = this.onChangeUserPublic.bind(this);
        this.onChangeUserPrivate = this.onChangeUserPrivate.bind(this);
      

        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeYTLink = this.onChangeYTLink.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            SessName: '',
            SessTopic: '',
            Password: '',
            Public: '',
            Private: '',  
            YTLink: ''
          }
    }

    onChangeSessionName(e) {
        this.setState({SessName: e.target.value})
        console.log(e.target.value)

    }

    onChangeSessionTopic(e) {
        this.setState({SessTopic: e.target.value})
    }


    onChangeUserPassword(e) {
        this.setState({Password: e.target.value})
    }

    onChangeUserPublic(e) {
        this.setState({Public: e.target.value})
    }

    onChangeUserPrivate(e) {
        this.setState({Private: e.target.value})
    }
    
    onChangeYTLink(e) {
        this.setState({YTLink: e.target.value})
    }

    onChangeStartTime(e) {
        this.setState({StartTime: e.target.value})
    }

    // http://localhost:5000/users/register?sessionname=subhed&email=subhed&password=subhed&sessiontopic=chavan&authdata=google&privacy=m&starttime=02/20/1998&ytlink=123

    onSubmit(e) {
        e.preventDefault()


        const studentObject = {
            sessionname: this.state.SessName,
            password: this.state.Password,
            sessiontopic: this.state.SessTopic,
            privacy:'public',
            email:localStorage.getItem('sessionEmail'),
            starttime: this.state.StartTime,
            ytlink: this.state.YTLink
          };

    

          axios.get('http://localhost:5000/session/create?sessionname='+studentObject.sessionname+'&password='+studentObject.password+'&sessiontopic='+studentObject.sessiontopic+'&email='+studentObject.email+'&privacy='+studentObject.privacy+'&starttime='+studentObject.starttime+'&ytlink='+studentObject.ytlink).then(res => console.log(res.data));
          
          window.location.reload();

    }

    render() {
        return (
            <div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>

              <Form.Group controlId="SessName">
                <Form.Label>Session Name</Form.Label>
                <Form.Control type="text" onChange={this.onChangeSessionName}/>
              </Form.Group>

              <Form.Group controlId="SessTopic">
                <Form.Label>Session Topic</Form.Label>
                <Form.Control type="text"  onChange={this.onChangeSessionTopic}/>
              </Form.Group>


              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.onChangeUserPassword}/>
              </Form.Group>

              <Form.Group controlId="Public">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onChangeUserPublic}></input>
                    <label className="form-check-label" for="exampleCheck1">Public</label>
                </div>
              
            </Form.Group>

            <Form.Group controlId="Private">
        
            <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck2" onChange={this.onChangeUserPrivate} ></input>
                    <label className="form-check-label" for="exampleCheck2">Private</label>
            </div>
              
            </Form.Group>
         

            <Form.Group controlId="StartTime">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="datetime-local" onChange={this.onChangeStartTime}/>
            </Form.Group>

            <Form.Group controlId="YTLink">
                <Form.Label>YouTube Link</Form.Label>
                <Form.Control type="text"  onChange={this.onChangeYTLink}/>
            </Form.Group>

              <Button variant="danger" size="lg" block="block" type="submit">
                Create User
              </Button>
            </Form>
          </div>
        );
    }
}