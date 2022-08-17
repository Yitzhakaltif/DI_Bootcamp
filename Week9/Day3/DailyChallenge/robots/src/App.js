import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { handleChange, getUsers } from "./redux/actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="App-header">ROBO - CHARACTERS</h1>
          <input onChange={this.props.handleChange} placeholder="Search robot..." name="search" type="text"></input>
        </div>
        <div className="App">
          {this.props.users
            .filter((val) => {
              if (this.props.text === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(this.props.text.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, i) => {
              return (
                <div key={i} className="Card">
                  <img src={`https://robohash.org/${item.id}?200x200`} alt="Robot"></img>
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <p>{item.username}</p>
                  <p>{item.email}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => dispatch(handleChange(e.target.value)),
    getUsers: () => dispatch(getUsers()),
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    text: state.text,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);