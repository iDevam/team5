import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.post('http://localhost:5000/Session/delete?sessionid=' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

            window.location.reload();

        }

    render() {
        return (
            <tr>
                <td> <a href={"/session/"+this.props.obj._id} > {this.props.obj.sessionName}</a>  </td>
                <td>{this.props.obj.sessionTopic}</td>
                <td>{this.props.obj.starttime}</td>
                <td>
                    <Link className="edit-link mr-4" to={"/edit-session/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent}  size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}