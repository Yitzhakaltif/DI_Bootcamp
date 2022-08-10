import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route, Link} from 'react-router-dom'

// import Counter from './components/Counter';
// import ErrorBoundary from './ErrorBoundary'

const App3 = (props) => {
  return(
    <div>
        <nav>
            <Link to='/' className='ppp'>  Home</Link>
            <Link to='/about'className='ppp'>  About</Link>
            <Link to='/contact'className='ppp'>  Contact</Link>
            
        </nav>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={ 
        <>
            <Contact/> 
        </> }/>
        
        </Routes>
    </div>
  )
}
export default App3