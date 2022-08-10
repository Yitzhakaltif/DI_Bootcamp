import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      select: "",
      nuts: "No",
      lactose: "No",
      vegan: "No",
    };
  }

  checkbox = (e) => {
    e.target.checked === true
      ? this.setState({ [e.target.name]: "Yes" })
      : this.setState({ [e.target.name]: "No" });
  };

  check = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <section>
        <form method="GET">
          <h1>Form:</h1>
          <div>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstname"
              placeholder="Enter First Name"
            ></input>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
            ></input>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              type="text"
              name="age"
              placeholder="Enter Age"
            ></input>
          </div>
          <div>
            <input
              onChange={this.check}
              value="male"
              type="radio"
              name="gender"
            ></input>
            Male
          </div>
          <div>
            <input
              onChange={this.check}
              value="female"
              type="radio"
              name="gender"
            ></input>
            Female
          </div>
          <div>
            <p>Select your destination:</p>
            <select onChange={this.handleChange} name="select">
              <option>--SELECT YOUR DESTINATION--</option>
              <option name="thailand">Thailand</option>
              <option name="japan">Japan</option>
              <option name="england">England</option>
            </select>
          </div>
          <div>
            <p>Dietary restrictions:</p>
          </div>
          <div>
            <input onChange={this.checkbox} name="nuts" type="checkbox"></input>
            Nuts free
          </div>
          <div>
            <input
              onChange={this.checkbox}
              name="lactose"
              type="checkbox"
            ></input>
            Lactose free
          </div>
          <div>
            <input
              onChange={this.checkbox}
              name="vegan"
              type="checkbox"
            ></input>
            Vegan
          </div>
          <input type="submit"></input>
        </form>
        </section>
        <hr></hr>
        <div className="info">
        <div>
          <h1>Entered information:</h1>
        </div>
        <div>
          Your name: {this.state.firstname} {this.state.lastname}
        </div>
        <div>Your age: {this.state.age}</div>
        <div>Your gender: {this.state.gender}</div>
        <div>Your destination: {this.state.select}</div>
        <div>Your dietary restrictions:</div>
        <div>**Nuts free : {this.state.nuts}</div>
        <div>**Lactose free : {this.state.lactose}</div>
        <div>**Vegan meal : {this.state.vegan}</div>
        </div>
      </div>
    );
  }
}

export default Form;