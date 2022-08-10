import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    let hi;
    if (this.props.pew === true) {
      hi = "Hello World!";
    }
    return (
      <div>
        <h1 id="hi">{hi}</h1>
      </div>
    );
  }
}

export default Child;