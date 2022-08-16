// import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieDetail/>
        <MovieList/>
      </header>
    </div>
  );
}

export default App;
