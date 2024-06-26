import React, { Component } from 'react';

class Counter extends Component {
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div className='row'>
        <div className="col-1">
        <span className={this.getBadge()}>{this.formatCount()}</span>
        </div>
        <div className="col">
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm"
        >
         +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm m-2"
          disabled={this.props.counter.value===0?"disabled":""}
        >
         -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger "
        >
          X
        </button>
        </div>

        
        
      </div>
    );
  }
}

export default Counter;
