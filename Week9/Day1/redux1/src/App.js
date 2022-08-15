import React from 'react'
import {connect} from 'react-redux';
import Child from './components/Child'
import One from './components/One';
import Two from './components/Two';

import './App.css';
import {handleChangeAction, handleClickAction} from './redux/actions'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      property_one: 'One 1',
      property_two: 'Two 2'
    }
  }

  handleChange = (e) => {
    this.setState({property_one:e.target.value})
  }

  handleClick = () => {
      this.setState({property_two:this.state.property_one})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            This is property_one: {this.state.property_one}
          </div>
          <div>
            This is prop_one from store: {this.props.a}
          </div>
          <div>
            Change property_one: <input type="text" onChange={this.props.ab} />
          </div>
          <div>
            This is property_two: {this.state.property_two}
          </div>
          <div>
            This is prop_two from store: {this.props.b}
          </div>
          <div>
            <button onClick={()=> this.props.cd(this.props.a)}>Change prop one to prop two</button>
          </div>
          <Child/>
          <One/>
          <Two/>

        </header>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return{
    a:state.prop_one,
    b:state.prop_two
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    ab: (e) => dispatch(handleChangeAction(e.target.value)),
    cd: (value) => dispatch(handleClickAction(value))
  }
}
export default connect(mapStateToProps,mapDispatchToProp)(App);