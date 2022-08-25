import {Sequelize} from 'sequelize';
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const Users = db.define('users',{
  email:{
    type:DataTypes.STRING
  },
  password:{
    type:DataTypes.STRING
  },
  createdAt:{
    field:'createdat',
    type:DataTypes.DATE
  },
  updatedAt:{
    field:'updatedat',
    type:DataTypes.DATE
  }
},{
  freezeTableName:true
}
)

export default Users;