import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import users from './users.json'
import 'tachyons';



function App() {
  const name = 'John';
  const last = 'Due';
  console.log(users)
//props

  // const users = [
  //   {email:'john@gmail.com', username:'johnny'},
  //   {email:'mark@gmail.com', username:'marko'},
  //   {email:'rex@gmail.com', username:'rexi'},
  //   {email:'taylor@gmail.com', username:'smith'}
  // ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <h4>Hello {users[0].email} {users[0].username}</h4>
        <h4>Hello {users[1].email} {users[1].username}</h4>
        <h4>Hello {users[2].email} {users[2].username}</h4> */}

        {/* {
          users.map(item=>{
            return(
              <h4>Hello {item.email} {item.username}</h4>
            )
          })
        } */}

        {/* <Hello email={users[0].email} username={users[0].username}/> */}
     {   users.map((item, i)=>{

      return(

        <Hello data={item} key={i}/>
      )
     })
     
     }


      </header>
    </div>
  );
}

export default App;
