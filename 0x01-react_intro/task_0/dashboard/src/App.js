import logo from './holberton-logo.png';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>
        School dashboard
        </h1>
      </header>
    </div>
    <div>
      <body className="App-body" >
        <p>
        Login to access the full dashboard
        </p>
      </body>
    </div>
    <div>
      <footer className="App-footer" >
        <p>
        Copyright 2020 - holberton School
        </p>
      </footer>
    </div>
    </>
  );
}

export default App;
