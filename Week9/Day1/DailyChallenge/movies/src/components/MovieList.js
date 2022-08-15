import { connect } from "react-redux";
import React from "react";
import { selectMovie } from "../actions/index";

const MovieList = ({ movies, selectMovie }) => {
  const mapMovies = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <span>{movie.title}</span>
        <button onClick={() => selectMovie(movie)}>Click for Details</button>
      </div>
    );
  });

  return (
    <div>
      <h2>Movie List</h2>
      <ul>{mapMovies}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  selectMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);