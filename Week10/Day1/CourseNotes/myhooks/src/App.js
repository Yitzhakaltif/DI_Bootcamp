import {useEffect, useState} from 'react';
import './App.css';
import Counter from './components/Counter'
import Users from './components/Users'
import Posts from './components/Posts'
import {Routes, Route, Link} from 'react-router-dom';




function App() {
  //1. create a function component [components folder] 
  //2. Counter 
  //3. Add 2 buttons to set the counter 
  const [name, setName] = useState('Please change my name')
 

  return (
    <div className="App">
        <h1>Hooks</h1>
        <h2>{name}</h2>
    <div>
      <Link to='/'>Home</Link>
    </div>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/posts/:id' element={<Posts/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
