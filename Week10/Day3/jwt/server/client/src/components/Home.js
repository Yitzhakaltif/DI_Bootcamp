import {useState, useEffect, useContext} from 'react';
import jwt_decode from 'jwt-decode';
import {AppContext} from '../App';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
    const [token, setToken] = useState({})
    const {accessToken} = useContext(AppContext);
    const navigate = useNavigate();
  useEffect(() => {
    try{
    const decode = jwt_decode(accessToken);
    // const userid = decode.userId;
    console.log(decode);
    setToken(decode);
    const expire = decode.exp;
    if(expire *1000< new Date().getTime()){
        navigate('/login')
    }}
    catch(e){
        navigate('/login')
    }

  },[])

  return(
    <div>
      <h1>Home</h1>
      <h4>User Id: {token.userId}</h4>
      <h4>Email: {token.email}</h4>
      <h4>Expiration Time: {new Date(token.exp *1000).toString()}</h4>
    </div>
  )
}
export default Home;

