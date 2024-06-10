import React, { Component } from 'react';
import Like from "./common/like";
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

class  Moviestable extends Component {
  
    columns = [
      {column:'title',label:'title'},
      {column:'genre.name',label:'genre'},
      {column:'numberInStock',label:'stock'},
      {column:'dailyRentalRate',label:'rate'},
      {key:'like', content: movie =>(
      <Like  liked={movie.liked} 
      onClick={() => this.props.onLike(movie)} />)},
      {key:'delete', content: movie =>(<button 
        onClick={() => this.props.onDelete(movie)} 
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>)},
      
    ];
    
    render() { 
        const {movies,sortColumn,onSort}=this.props;
        
        return (<table className="table">
            < TableHeader 
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}
            />
            < TableBody 
             data ={movies}
             columns={this.columns}
            />
            
          </table>);
    }
}
 
export default Moviestable;