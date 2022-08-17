import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "./actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  odd = () => {
    if (this.props.count % 2 !== 0) {
      this.props.increase();
    }
  };

  asyncIncrease = () => {
    setTimeout(() => this.props.increase(), 1000);
  };

  render() {
    console.log(this.props.count);
    return (
      <div>
        <h1>Counter</h1>
        Clicked: {this.props.count} times
        <br></br>
        <button onClick={() => this.props.increase()}>+</button>
        <button onClick={() => this.props.decrease()}>-</button>
        <button onClick={this.odd}>Increment if odd</button>
        <button onClick={this.asyncIncrease}>Increment async</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increase: (count) => dispatch(increase(count)),
    decrease: (count) => dispatch(decrease(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);