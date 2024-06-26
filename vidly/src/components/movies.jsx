import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import Pagination from "./common/pationationing";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listgroup";
import { getGenres } from "../services/fakeGenreServices";
import Moviestable from "./movies_table";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    selectedGenre:[],
    currentPage: 1,
    sortColumn:{column:'title',order:'asc'}
  };

  componentDidMount() {
    const genre = [{_id :"", name:'all genres'},...getGenres()] 

    this.setState({ movies: getMovies(), genres: genre });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({selectedGenre:genre,  currentPage: 1 });
  };
   
  handleSort = sortColumn =>{
 
  this.setState({sortColumn})
   };

   getPagedData = () =>{

    const { pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
       movies: allMovies 
     } = this.state;

    const filteredMovies = selectedGenre && selectedGenre._id ?
     allMovies.filter(m=>m.genre._id===selectedGenre._id):
      allMovies;
        const sorted=_.orderBy(filteredMovies,[sortColumn.column],[sortColumn.order])
       const movies = paginate(sorted, currentPage, pageSize);
       return { totalCount:filteredMovies.length,data:movies};

   }
    

  render() {
    const { length: count } = this.state.movies;
    const { pageSize,
       currentPage,
       sortColumn
      } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;
   
     const {totalCount, data:movies} = this.getPagedData();
         return (
      <div className="row m-4">
        <div className="col-3">
          <ListGroup 
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database.</p>
          < Moviestable 
          movies={movies}
          sortColumn={sortColumn}
          onLike={this.handleLike} 
          onDelete={this.handleDelete}
          onSort={this.handleSort}
           />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
