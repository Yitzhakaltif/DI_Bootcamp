import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: [],
    };
  }

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({
        taskList: [...this.state.taskList, { task: e.target.value }],
      });
      e.target.value = "";
    }
  };

  handleClick = (e) => {
    e.target.remove();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-do-list</h1>
          <br/>
          <p>Add a Task by entering the task name and pressing the Enter Button</p>
          
          {this.state.taskList.map((item, i) => {
            return (
              <li style={{}} onClick={this.handleClick} key={i}>
                {item.task}
              </li>
            );
          })}
          
          <input onKeyDown={this.handleKeyDown} type="text" placeholder="New Task++"></input>
        </header>
      </div>
    );
  }
}

export default App;