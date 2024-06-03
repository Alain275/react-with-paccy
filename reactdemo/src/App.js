import React, { Component } from 'react';
import './App.css';

import Counters from './components/counters';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
      <Counters/>
      </div>
    );
  }
}

export default App;
