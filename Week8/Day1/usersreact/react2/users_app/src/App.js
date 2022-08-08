import logo from './logo.svg';
import './App.css';
import User from './components/User';
import users from './users.json';
import 'tachyons';
import React from 'react'


function App() {
  // console.log(users)
  return (
    <div className='tc'>
  {
    users.map(item=>{
      return<User data={item}/>
    })
  }



    </div>
  )
}

export default App;
