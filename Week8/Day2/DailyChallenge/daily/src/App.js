import React from 'react';
import './App.css';
import Vote from './components/Vote';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaScript", votes: 0},
          {name: "Java", votes: 0}
      ]
  }
  }
  render(){
    
    return(
      <div className='App'>
        <header className='App-header'>
          <div>
            <Vote name={this.state.languages[0].name} />
            <Vote name={this.state.languages[1].name} />
            <Vote name={this.state.languages[2].name} />
            <Vote name={this.state.languages[3].name} />
          </div>
        </header>
      </div>
    )
  }
}

export default App;