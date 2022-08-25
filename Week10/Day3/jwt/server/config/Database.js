import {DatabaseError, Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    // logging:true,
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see new error
          rejectUnauthorized: false, // This line will fix new error
        },
      },
  });



export default db;