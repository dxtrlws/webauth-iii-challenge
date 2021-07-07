import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Users';

import './App.css'

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className='App'>
        <ul>
          <li>
            <NavLink to='/signup'>Sign Up</NavLink>
          </li>
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li>
            <button onClick={this.logout}>Logout</button>
          </li>
        </ul>

        <main>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
