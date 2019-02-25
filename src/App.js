import React, { Component } from 'react';
import Navi from './components/nav';
import Board from './components/tablero';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi/>
        <Board/>
        
      </div>
    );
  }
}

export default App;
