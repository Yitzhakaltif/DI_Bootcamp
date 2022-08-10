import React from "react";
import exp from "../exp.json";

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const data = exp;

    return (
      <div>
        <h1>Hi This is a title</h1>
        <br></br>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.title}</h2>
              <h4>{item.content}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostList;