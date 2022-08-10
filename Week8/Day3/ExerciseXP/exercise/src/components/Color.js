import React from "react";
import Child from "./Child";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  btn = () => {
    this.setState({ favoriteColor: "pink" });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    return (document.getElementById("current").innerHTML =
      "My Favorite color is: " + this.state.favoriteColor);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return (document.getElementById("previous").innerHTML =
      "Previous color: " + prevState.favoriteColor);
  }

  del = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <h1>My Faivorite color is {this.state.favoriteColor}</h1>

        <button onClick={this.btn}>Change color!</button>

        <div id="current">My Favorite color is: </div>

        <div id="previous">Previous color: </div>

        <div id="new">New color: {this.state.favoriteColor}</div>

        {this.state.show ? <Child pew={this.state.show} /> : null}
        
        <button onClick={this.del}>Delete Header</button>
      </div>
    );
  }
}

export default Color;