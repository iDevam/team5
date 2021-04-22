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
    axios.get('http://localhost:5000/Session/show/')
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
    return this.state.sessions.map((res, i) => {
      return <SessionTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Session Name</th>
            <th>Session Title</th>
            <th>Start Time</th>
            <th>Update</th>

          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}