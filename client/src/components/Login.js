import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password,
    };
    axios
      .post('http://localhost:5000/api/login', user)
      .then(result => {
        this.setState({
          username: '',
          password: '',
        });
        localStorage.setItem('token', result.data.authToken)
        this.props.history.push('/users')
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { username, password } = this.state;
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
