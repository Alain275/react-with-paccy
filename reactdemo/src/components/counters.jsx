import React, { Component } from 'react';
import Counter from './Counter';
class  Counters extends Component {
    state = { counters:[{id:1, value:1},
        {id:2, value:3},
        {id:3, value:0},
        {id:4, value:0}] } 

        handleDelete = counterId =>{
       const counters = this.state.counters.filter(c=> c.id !==counterId);
       this.setState({counters});
        }
 
    render() {  
        return (
            <div> 
                {this.state.counters.map(k=><Counter key={k.id} onDelete={this.handleDelete} value={k.value} id={k.id}>
                
                </Counter>)}
            </div>
        );
    }
}
 
export default Counters;