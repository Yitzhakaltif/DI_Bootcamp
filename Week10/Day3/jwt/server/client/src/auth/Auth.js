import {useEffect, useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import App, {AppContext} from '../App';


export const Auth = (props) => {
    const [redirect, setRedirect] = useState(null);
    const {setccessToken} = useContext(AppContext);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const verify = async () => {
            try {
                let response = await axios.get('/token',{
                    withCredentials: true,
                    headers: {
                        'Content-Type':'application/json'
                    }
                });
                console.log(response);
                if(response.status == 200) {
                    setRedirect(true)
                }
            } catch (error) {
                navigate('/login')
            }
        }
        verify();
    },[])
    return (
        redirect ? props.children : <h1>Unauthorized</h1>
    )
}





