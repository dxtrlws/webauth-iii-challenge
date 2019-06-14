import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get('http://localhost:5000/api/users', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(result => {
        console.log(result.data)
        this.setState({
            users: result.data
        })
    })
    .catch(err => {
        console.log(err)
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Users</h1>
        <ul>
       {this.state.users.map((user, i) => {
           return  <li key={i}>{user.username}</li>
       })}
       </ul>
      </div>
    );
  }
}
