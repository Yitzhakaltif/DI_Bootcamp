import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Movie from './components/Movie';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          </Routes>
          <Footer />
        </div>
     </BrowserRouter>
  );
}

export default App;