import React from "react";
import { connect } from "react-redux";
import { setNames } from "../actions";

class Firstname extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Love Calculator</h1>
        First Name:
        <input
          onChange={this.props.handleChange}
          type="text"
          name="fname"
        ></input>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(setNames(e.target.name, e.target.value)),
  };
};

export default connect(null, mapDispatchToProps)(Firstname);