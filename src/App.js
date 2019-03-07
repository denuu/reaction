import React, { Component } from 'react';
import './styles/App.scss';
import Navbar from './components/Navigation/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
