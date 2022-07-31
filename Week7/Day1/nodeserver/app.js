const app = require(`./script.js`);
app.getUsers()
.then(data=>{
    console.log(data)
})