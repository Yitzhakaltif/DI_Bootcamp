import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';
import {connect} from 'react-redux';
import {getUsers,search} from './redux/actions';
import './App.css';

function App(props) {

  return (
    <div>
      <button onClick={()=>props.dispatch(getUsers())}>Get Users</button>
      <div>
        Search: <input type="text" onChange={(e)=>props.dispatch(search(e.target.value))}/>
      </div>
      {
        props.users.map(item=>{
          return(
            <div key={item.id}>
              {item.name}
            </div>
          )
        })
      }
       {/* <header className="App-header">
        <MovieDetail/>
        <MovieList/>
      </header> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return{
    users:state.filter
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     show: () => dispatch(getUsers())
//   }
// }
export default connect(mapStateToProps)(App);

