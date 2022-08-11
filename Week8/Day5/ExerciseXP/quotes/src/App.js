import React from "react";
import QuotesDatabase from "./components/QuotesDatabase";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      color: "",
      num: 0,
    };
  }
  quoter = () => {
    const q = QuotesDatabase;
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let drawNum;
    do {
      drawNum = Math.floor(Math.random() * q.length);
      console.log(drawNum);
    } while (drawNum === this.state.num);
    this.setState({ num: drawNum });
    this.setState({ quote: q[drawNum] });
    this.setState({ color: "#" + randomColor });
  };

  render() {
    return (
      <div className="App-header" style={{ backgroundColor: this.state.color }}>
        <div
          className="pew"
          style={{ backgroundColor: "white", textAlign: "center" }}
        >
          <h1 style={{ color: this.state.color }}>{this.state.quote.quote}</h1>
          <br></br>
          <p style={{ color: "black" }}>{this.state.quote.author}</p>
          <br></br>
        </div>
        <button
          style={{ backgroundColor: this.state.color }}
          onClick={this.quoter}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default App;