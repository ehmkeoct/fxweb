import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the test website for FX Web
        </p>

      </header>
      <body className="App-body">
      <img src={logo} className="App-logo" alt="logo" />
      <a
          className="App-link"
          href="https://github.com/ehmkeoct/fxweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project GitHub
        </a>
      </body>
    </div>
  );
}

export default App;
