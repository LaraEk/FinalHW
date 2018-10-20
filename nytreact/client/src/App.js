import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* note: this is where a <Header /> component would go  */}
          <img src={"https://i.imgur.com/rK3EjIZ.jpg"} className="App-logo" alt="logo" />
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
        {/* note: this is where <Other /> <Components /> would go. */}
      </div>
    );
  }
}

export default App;
