import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Navbar from './components/Navigation/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar />
      </div>
    );
  }
}

export default App;
