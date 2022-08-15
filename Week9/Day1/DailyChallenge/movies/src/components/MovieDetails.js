import React from "react";
import { connect } from "react-redux";

const MovieDetails = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return (
      <div>
        <h2>Movies</h2>
        <p>Select Movie</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Movie Details</h2>
        <p>{selectedMovie.title}</p>
        <p>{selectedMovie.releaseDate}</p>
        <p>{selectedMovie.rating}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieDetails);