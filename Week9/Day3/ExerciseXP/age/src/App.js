import React from "react";
import { connect } from "react-redux";
import { increase, decrease } from "./actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props.age);
    return (
      <div style={{textAlign:'center'}}>
        <h1>Age</h1>
        Age: {this.props.age}<br/>
        
        <button onClick={() => this.props.increase()}>AGE UP</button>
        <button onClick={() => this.props.decrease()}>AGE DOWN</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increase: (count) => dispatch(increase(count)),
    decrease: (count) => dispatch(decrease(count)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);