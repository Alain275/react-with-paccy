import React, { Component } from 'react';
import Counter from './Counter';
class  Counters extends Component {
    state = { counters:[{id:1, value:1},
        {id:2, value:3},
        {id:3, value:0},
        {id:4, value:0}] } 
 
    render() {  
        return (
            <div> 
                {this.state.counters.map(k=><Counter key={k.id} value={k.value} id={k.id}>
                
                </Counter>)}
            </div>
        );
    }
}
 
export default Counters;