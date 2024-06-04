import React, { Component } from 'react';
import './App.css';

import Counters from './components/counters';
import NavBar from './components/navigation';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div> 
        <NavBar 
        totalNavBar={this.state.counters.filter(x=>x.value>0).length}
        />
      <main className='container'>

      <Counters 
      counters={this.state.counters}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onReset={this.handleReset}
      />
      </main>
      </div>
    );
  }
}

export default App;
