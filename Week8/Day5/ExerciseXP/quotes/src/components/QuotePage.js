import React from "react";
import QuotesDatabase from "./QuotesDatabase";

class QuotePage extends React.Component {
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
      <div style={{ backgroundColor: "white" }}>
        <h1 style={{ color: this.state.color }}>{this.state.quote.quote}</h1>
        <br></br>
        <p>{this.state.quote.author}</p>
        <br></br>
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

export default QuotePage;