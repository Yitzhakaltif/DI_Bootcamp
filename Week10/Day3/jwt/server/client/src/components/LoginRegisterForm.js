import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toUnitless } from '@mui/material/styles/cssUtils';


const LoginRegisterForm = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    let navigate = useNavigate();

    const handleAction = async()=>{
        if(props.title==='register'){
            try {
                const response = await axios.post('/register', {
                    email, password
                },{
                    withCredentials:true,
                    headers:{
                        'Content-Type':'application/json'
                    }
                });
                console.log('register=>', response);
                navigate('/login')

            } catch (error) {
                setMsg(error.response.data.msg)
                console.log(error)
            }
        }else{
            try {
                const response = await axios.post('/login', {
                    email,password
                },{
                    withCredentials:true,
                    headers:{
                        'Content-Type':'application/json'
                    }  
                });
                console.log(response.data)
                navigate('/home')

            } catch (error) {
                setMsg(error.response.data.msg)
            }            
        }
    }

    return(
        <div>
            <div>
                <h3>{props.title} Form</h3>
            </div>
            <Box component={'form'} sx={{m: 1}} noValidate autoComplete='off'>
                <TextField sx={{m: 1}} id='email' label="Enter Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
                <TextField sx={{m: 1}} id='password' label="Enter Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}/>
            </Box>
            <Button variant='contained' onClick={handleAction}>{props.title}</Button>
            <div>
                <p>{msg}</p>
            </div>
        </div>
    )
}


export default LoginRegisterForm;