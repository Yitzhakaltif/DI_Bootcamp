// Exercise1
// ReactDOM.render(<h1>I do not use JSX</h1>, document.getElementById('root'));
//rest of exercises
import logo from './logo.svg';
import './App.css';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from "./Exercise4";
//Exercise 1 
function App() {
  const myelement = <h1>I Love JSX!</h1>;

  const sum = 5 + 5;

  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      {myelement}
      <h3>React is {sum} times better with JSX</h3>
   <h1>Hello World</h1>
   <h3>{user.first_name}</h3>
   <h3>{user.last_name}</h3>

   <UserFavoriteColors anim={user.fav_animals}/>
   <Exercise4/>
    </div>
  );
}


export default App;