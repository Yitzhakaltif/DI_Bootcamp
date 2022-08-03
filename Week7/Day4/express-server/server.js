const express = require(`express`);
const knex = require(`knex`)
const bcrypt = require(`bcrypt`)
const app = express();

const db = knex({
    client:'pg',
    connection:{
        host: `localhost`,
        port: 5432,
        user: `postgres`,
        password: `YitzhakDI`,
        database: `dvdrental`

    }
})

app.use(`/`, express.static(__dirname+`/public`))
//to extract data from the body
app.use(express.json())
app.use(express.urlencoded({extended: true}));



app.listen(5000, ()=>{
    console.log(`server is running on port 5000`);
})


//without app.use
app.get(`/userlogin`, (req, res)=>{
    console.log(req.query);
    res.json({msg:`login success`, status: 200})
    //without app.use
    // res.sendFile(__dirname+`/public/login.html`)
})

// app.post(`/login`, (req, res)=>{
//     console.log(req.body);
//     res.json({msg:`NOT OK`})
// })


app.post(`/register`, async (req, res)=>{

    console.log(req.body)
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    saveUser(req.body.email, hashPassword)
    .then(data=>{
        res.json(data)
    })
    .catch(e=>{
        console.log(e)
        res.json({msg: `Email Already Exists`})
    })
    // res.send(`register page`)
})



app.post(`/login`, async (req, res)=>{
    console.log(req.body)
    getUser(req.body.email)
    .then( async data=> {
        console.log(data);
        if(data.length==0){
            res.json({msg: `email does not exist`})
        }
        else{
            console.log(data[0].password)
            const match = await bcrypt.compare(req.body.password, data[0].password)
            if(!match){
                res.json({msg:`Wrong Password`})
            }
            else{
                res.json({msg:`Login OK`})
            }
        
        }
    })
    .catch(e=>{
        console.log(e)
    })
})


function saveUser (email, password){
    return db(`users`)
    .insert({email: email, password: password})
    .returning(`*`)
}


function getUser(email){
    return db(`users`)
    .select(`id`, `email`, `password`)
    .where({email:email})
}




