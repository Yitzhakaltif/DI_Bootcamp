import "./App.css";
import SearchBar from "./components/SearchBar";
import RoboList from "./components/RoboList";
import React from "react";
import { connect } from "react-redux";
import { getUsers } from "./actions";

class App extends React.Component {
  componentDidMount() {
    const { getUsers } = this.props;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => getUsers(data))
      .catch((err) => console.log(err));
  }

  
  render() {
    return (
      <div className="App">
        <SearchBar />

        <RoboList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (data) => dispatch(getUsers(data)),
  };
};

export default connect(null, mapDispatchToProps)(App);