import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

//1. install react router dom
//2. create routes -one for home and for posts path='/posts/:id'
//3. posts component get the param with useParams - react-router-dom 
//4. useEffect -(componentDidMount) - get the posts of the user and display them on the page 


function Users() {
    const [users, setUsers] = useState([])
    // const [name, setName]= useState('')

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
        .catch(e=>{
            console.log(e)
        })
    }

  return (
    <div>
        {
            users.map(item=>{
                return(
                    <div key={item.id}>
                        <Link to={`/posts/${item.id}`}>{item.username}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users