import React from "react";
import { connect } from "react-redux";
import { setNames } from "../actions";

class Secondname extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondname: "",
    };
  }

  render() {
    return (
      <div>
        Second Name:
        <input
          onChange={this.props.handleChange}
          type="text"
          name="sname"
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

export default connect(null, mapDispatchToProps)(Secondname);