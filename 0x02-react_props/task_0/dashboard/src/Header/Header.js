import React from 'react';
import './Header.css';

import logo from '../holberton-logo.png';

const Header = () => {
  return (
    <div>
        <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
    </div>
  )
}

export default Header