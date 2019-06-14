import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Users';

function App() {
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
        <li />
        <li>
          <NavLink to='/login'>Logout</NavLink>
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

export default App;
