import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter name= {'john'}/>
      </header>
    </div>
  );
}

export default App;
