import React, { Component } from "react";
import exp2 from "../exp2.json";

 class Example2 extends Component {
  render() {
    const skills = exp2.Skills;
    return (
      <div>
        {skills.map((item, i) => {
          const skillList = item.SkillSet.map((item) => {
            return <li>{item.Name}</li>;
          });
          return (
            <div>
              {item.Area}
              <ul>{skillList}</ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Example2