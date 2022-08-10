import React, { Component } from "react";
import exp2 from "../exp2.json";

export default class Example1 extends Component {
  render() {
    const data = exp2;

    return (
      <div>
        {data.SocialMedias.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
    );
  }
}