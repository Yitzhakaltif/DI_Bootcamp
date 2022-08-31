import {useState, createContext} from 'react'
import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Admin from './components/Admin.js'
import LoginRegisterForm from './components/LoginRegisterForm';
import {Auth} from './auth/Auth.js';
import Home from './components/Home.js'
import {Routes, Route, useNavigate} from 'react-router-dom'; 

export const AppContext = createContext(null);


export default function App() {
  const [accessToken, setAccessToken] = useState('')
  return (
    <AppContext.Provider value={{accessToken, setAccessToken}} >
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/login' element={<LoginRegisterForm title={"login"}/>}/>
        <Route path='/register' element={<LoginRegisterForm title={"register"}/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Auth><Admin/></Auth>}/>

      </Routes>
    </div>
    </AppContext.Provider>
  )
}
