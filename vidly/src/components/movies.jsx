import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
class Movies extends Component {
state = {
movies: getMovies()
};

handleDelete=(movie)=>{
    const movies=this.state.movies.filter(m=>m._id !==movie._id);
    this.setState({  movies})
}

render(){
  const {length:count}= this.state.movies;
 
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
        </tr>
        </thead>
        <tbody>
            {this.state.movies.map(movie => (
             <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">delete</button></td>
             </tr>  
            ))}  
        </tbody>
    </table>
    </div>
  );  
}}


export default Movies;