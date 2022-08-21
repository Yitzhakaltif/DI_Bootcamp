import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
function Posts() {
    const [posts, setPosts] = useState([])
    const params = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
        .then(res=>res.json())
        .then(data=>{
            setPosts(data)
        })
        .catch(e=>{
            console.log(e)
        })
    })
  return (
    <>
    {
        posts.map(item=>{
            return(
                <div style={{border:'1px solid black', padding:'25px', margin: '20px'}}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
        
                </div>
            )
        })
    }

    </>
  )
}

export default Posts