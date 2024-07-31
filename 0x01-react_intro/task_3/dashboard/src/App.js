// task_2/dashboard/src/App.js
import React from 'react';
import logo from './holberton-logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label>Email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button>OK</button>
      </div>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
