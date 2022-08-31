import {useState, useEffect} from 'react'


const Admin = (props) => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch(`/users`)
        .then(res=> {
            if (res.status == 200) {
                return res.json()
            }
            
        })
        .then(data=>{
            setUsers(data)
        })
    },[])
    return(
        <div>
            <h1>Admin Page</h1>
            {
                users?users.map(item=>{
                    return(
                        <div key={item.id}>
                            {item.email}
                        </div>
                    )
                }): 'Unauthorized'
            }
        </div>
    )
}



export default Admin;