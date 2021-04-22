import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import SessionTableRow from './SessionTableRow.component';

export default class SessionList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sessions: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Session/findSession?id='+localStorage.getItem('latestSessionId'))
      .then(res => {
          console.log(res.data);
        this.setState({
          sessions: res.data.session
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return "https://www.youtube.com/embed/"+this.state.sessions.videolink;
  }


  render() {
    return (
    <div className="table-wrapper">
    
    <iframe width="100%" height="500px" src={this.DataTable()} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


         
     
    </div>
    );
  }
}