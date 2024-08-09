import logo from './holberton-logo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label 
        >Email:
        <input 
         type="email"/>
         </label>
  
        <label>Password:</label>
        <input type="password">
        </input>
        <button>OK</button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)} </p>
      </footer>
    </div>
  );
}

export default App;
