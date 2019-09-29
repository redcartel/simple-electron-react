import React from 'react';
import logo from './logo.svg';
import './App.css';

import fs from 'fs';
import electron from 'electron';
import isDev from 'electron-is-dev';

if (isDev) {
  console.log("Test fs and electron import:")
  console.log(fs);
  console.log(electron);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
