import React, { Component } from "react";
import exp2 from "../exp2.json";

class Example3 extends Component {
  render() {
    const data = exp2.Experiences;
    console.log(data);
    return (
      <div>
        {data.map((item) => {
          return (
            <div>
              <img src={item.logo} alt="Company Logo"></img>
              <div>{item.companyName}</div>
              {item.roles.map((item) => {
                return (
                  <div>
                    <p>{item.title}</p>
                    <p>
                      {item.startDate}, {item.location}
                    </p>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}


export default Example3