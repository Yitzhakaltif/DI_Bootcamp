import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Calculate</button>
      </div>
    );
  }
}

export default Button;