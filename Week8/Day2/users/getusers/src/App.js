import React from 'react';
// import myusers from './users.json';
import User from './components/User'
import Search from './components/Search'
import 'tachyons'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchTxt:''
    }
    console.log('constructor');
  }

  getUsers = () => {
    // this.setState({users:myusers})
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({users:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      this.setState({users:data})
    })
    .catch(e=>{
      console.log(e);
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate', prevState, this.state);
  }

  handleChange=(event)=>{
    console.log(event.target.value);
    this.setState({searchTxt:event.target.value})
  }

  render(){
    console.log('render');
    // console.log('users=> ',this.state.users);


    const filterUsers = this.state.users.filter(item=>{
      return item.name.toLowerCase().includes(this.state.searchTxt.toLowerCase())
    })
    return(
      <div>
        {/*<button onClick={this.getUsers}>Show Users</button>*/}
        {/* <input type='text' placeholder='Search...' onChange={this.handleChange}/> */}
        <Search myhandler={this.handleChange}/>
        <div>
        {
          filterUsers.map(item =>{
            return <User data={item} key={item.id}/>
          })
        }
        </div>
      </div>
    )
  }
}
export default App