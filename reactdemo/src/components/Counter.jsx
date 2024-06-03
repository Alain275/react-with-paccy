import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.value
      
    };
  }

 
  

  formatCount() {
    return this.state.count === 0 ? <div>Zero</div> : this.state.count;
  }

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }
  
  handlingIcreament =() =>{
    
    this.setState({count:this.state.count+1})
  }

  render() {
    return (
      <div>
       <h4>{this.props.id}</h4>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button
        onClick={this.handlingIcreament}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm">
          increament
        </button>
        
      </div>
    );
  }
}

export default Counter;
