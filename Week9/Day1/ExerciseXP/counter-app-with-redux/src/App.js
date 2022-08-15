import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increase, decrease } from "./actions";

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
        <header className="App-header">
          <h1>Counter with Redux</h1>
          <button onClick={() => this.props.myIncrease(this.props.counter)}>+</button>
          {this.props.counter}
          <button onClick={() => this.props.myDecrease(this.props.counter)}>-</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    myIncrease: (count) => dispatch(increase(count)),
    myDecrease: (count) => dispatch(decrease(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);