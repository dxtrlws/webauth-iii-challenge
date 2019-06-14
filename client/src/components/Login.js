import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    department: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password, department } = this.state;
    const user = {
      username,
      password,
      department
    };
    axios
      .post('http://localhost:5000/api/register', user)
      .then(data => {
        this.setState({
          username: '',
          password: '',
          department: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { username, password, department } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            value={username}
            placeholder='username'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='department'
            value={department}
            placeholder='department'
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            value={password}
            placeholder='password'
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
