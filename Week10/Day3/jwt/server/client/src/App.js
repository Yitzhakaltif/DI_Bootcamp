import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import LoginRegisterForm from './components/LoginRegisterForm';
import Home from './components/Home.js'
import {Routes, Route, useNavigate} from 'react-router-dom'; 
export default function App() {
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/login' element={<LoginRegisterForm title={"login"}/>}/>
        <Route path='/register' element={<LoginRegisterForm title={"register"}/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>
    </div>
  )
}
