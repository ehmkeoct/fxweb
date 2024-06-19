import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        <div className ="header-content">
          <p>
            This is the skellington website for FX Web
          </p>
        </div>
      </header>
      <Login />
      <Dashboard/>
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
        <a
          className="App-link"
          href="https://us-east-2.console.aws.amazon.com/amplify/apps/dydv7y5329qud/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ampllify
        </a>
      </body>
    </div>
  );
}

export default App;
