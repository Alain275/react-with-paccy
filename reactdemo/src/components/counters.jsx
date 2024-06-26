import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  

  render() {
    const {onReset,counters,onIncrement,onDelete,onDecrement}=this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
