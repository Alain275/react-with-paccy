import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import Like from "./common/like";
import Pagination from "./common/pationationing";
class Movies extends Component {
state = {
movies: getMovies(),
pageSize:4,
currentPage:1
};

handleDelete=(movie)=>{
    const movies=this.state.movies.filter(m=>m._id !==movie._id);
    this.setState({  movies})
}

handeLike = (movie) => {
  const movies = [...this.state.movies];
  const index = movies.indexOf(movie);
  movies[index] = { ...movies[index] }; 
  movies[index].liked = !movies[index].liked;
  this.setState({ movies });
};
handlePageChange = page =>{
  this.setState({currentPage:page})
}

render(){
  const {length:count}= this.state.movies;
  const{pageSize,currentPage}=this.state;
 
  if ( count===0)
    return <p>there is no movies in the database</p>
  return(
   <div>
    <p>showing {count} movies in database</p>
    <table className="table">
        <thead>
        <tr>
            <th> title</th>
            <th> Genre</th>
            <th>stock</th>
            <th>rate</th>
            <th></th>
            <th></th>
        </tr>
        </thead>
        <tbody>
            {this.state.movies.map(movie => (
             <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.liked} onClick={()=>this.handeLike(movie)}/></td>
                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">delete</button></td>
             </tr>  
            ))}  
        </tbody>
    </table>
    <Pagination
    itemsCount={count} 
    pageSize={pageSize}
    currentPage={currentPage}
    onPageChange={this.handlePageChange}
    />
    </div>
  );  
}}


export default Movies;