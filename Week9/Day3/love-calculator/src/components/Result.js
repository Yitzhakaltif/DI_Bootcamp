import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        Results:
        <p>
          {this.props.results.fname} & {this.props.results.sname}
        </p>
        <p>percentage: {this.props.results.percentage}</p>
        <p>result: {this.props.results.result}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

export default connect(mapStateToProps)(Result);