import React from "react";
import Firstname from "./components/Firstname";
import Secondname from "./components/Secondname";
import Result from "./components/Result";
import Button from "./components/Button";
import { connect } from "react-redux";
import { findMatch } from "./actions";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    const { fname, sname } = this.props;
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // this.setState({ results: data });
        this.props.findAMatch(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Firstname />
          <Secondname />
          <Button handleClick={this.handleClick} />
          <Result />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fname: state.fname,
    sname: state.sname,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findAMatch: (data) => dispatch(findMatch(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);