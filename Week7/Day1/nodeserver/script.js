  const axios = require(`axios`);

  const getUsers = async()=>{
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data
    }catch{
        console.error(error)
    }
  }

  
module.exports = {
    getUsers
}