import React from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <MovieList />
        <MovieDetails />
      </div>
    );
  }
}

export default App;