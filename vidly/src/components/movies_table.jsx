import React, { Component } from 'react';
import Like from "./common/like";
import Table from './common/table';
import { Link } from 'react-router-dom';

class  Moviestable extends Component {
  
    columns = [
      {column:'title',label:'title',content: movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
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
        
        return (
          <Table 
          columns={this.columns} 
          data = {movies}
          sortColumn = {sortColumn}
          onSort = {onSort}
          />
        );
    }
}
 
export default Moviestable;