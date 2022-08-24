// const express = require("express");
// const cors = require('cors');
// const knex = require('knex');
// const dotenv = require('dotenv');
import express from 'express';
import knex from 'knex';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

app.use(cors());

app.listen(process.env.PORT||8080, ()=>{
    console.log(`running on port ${process.env.PORT||8080} `)
})

const db = knex({
    client: 'pg',
    connection: {
        connectionString:process.env.DB_URI,
        // host: process.env.DB_HOST,
        // port:process.env.DB_PORT,
        // user:process.env.DB_USER,
        // password:process.env.DB_PASSWORD,
        // database:process.env.DB_NAME,
        ssl:{rejectUnauthorized:false}
    }
})
//

app.get('/api', (req,res)=>{
    db('products')
    .select('id', 'name', 'price')
    .then(rows=>{
        res.json(rows)
    })
    .catch(e=>{
        console.log(e)
    })
})





const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname , 'client/build')));
app.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname ,'./client/build','index.html'))
} )
