import logo from './logo.svg';
import './App.css';
import Car from './components/Car'
import Garage from './components/Garage'
import Events from './components/Events'
import Phone from './components/Phone'
import Color from './components/Color'


function App() {
  const carinfo = {
    name: 'Ford',
    model: 'Mustang'
  };
  return (
    <div className="App">
      <header className="App-header">
    


    <Car model={carinfo.model}/>
    <Garage size='small'/>
    <Events/>
    <Phone/>
    <Color/>
      </header>
    </div>
  );
}

export default App;
