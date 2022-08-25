import express from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from 'sequelize';
import db from './config/Database.js';
import router from './routes/Users.js';

dotenv.config();

const app = express();
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router)

app.listen(process.env.PORT, ()=>console.log(`Server running on port ${process.env.PORT}`));





try {
    await db.authenticate();
    console.log('Database Connected');
} catch(e){
    console.log(e);
}

