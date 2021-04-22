import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateSession extends Component {

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

    
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.post('http://localhost:3000/Session/findSession?id=' + this.props.match.params.id)
          .then(res => {
              console.log(res);
            this.setState({
              UserID: res.data.session.userid,
              VideoLink: res.data.session.videolink,
              StartTime: res.data.session.starttime,
              Visibility: res.data.session.visibility,
              Info: res.data.session.info
            });

          })
          .catch((error) => {
            console.log(error);
          })
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
    
                  <Form.Group controlId="UserID">
                    <Form.Label>UserID</Form.Label>
                    <Form.Control type="text" value={this.state.UserID} onChange={this.onChangeUserUserID}/>
                  </Form.Group>
    
                  <Form.Group controlId="VideoLink">
                    <Form.Label>VideoLink</Form.Label>
                    <Form.Control type="text" value={this.state.VideoLink}  onChange={this.onChangeUserVideoLink}/>
                  </Form.Group>
    
                  <Form.Group controlId="StartTime">
                    <Form.Label>StartTime</Form.Label>
                    <Form.Control type="text" value={this.state.StartTime} onChange={this.onChangeUserStartTime}/>
                  </Form.Group>
    
                  <Form.Group controlId="Visibility">
                    <Form.Label>Visibility</Form.Label>
                    <Form.Control type="text" value={this.state.Visibility} onChange={this.onChangeUserVisibility}/>
                  </Form.Group>
    
    
    
                <Form.Group controlId="Info">
                    <Form.Label>Info</Form.Label>
                    <Form.Control type="text" value={this.state.Visibility} onChange={this.onChangeUserInfo}/>
                </Form.Group>
    
                  <Button variant="danger" size="lg" block="block" type="submit">
                    Update Session
                  </Button>
                </Form>
              </div>
            );
        }
    }        