import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div>
        <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label>Email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button>OK</button>
      </div>
    </div>
  )
}

export default Login