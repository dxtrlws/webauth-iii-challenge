import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavLink to='/signup'>Sign Up</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <main>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
      </main>
      
    </div>
  );
}

export default App;
