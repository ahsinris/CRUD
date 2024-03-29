const sequelize = require('../database/mysql')
const {DataTypes}=require('sequelize')

const User =sequelize.define('users',{
    userId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        },
    },
    emailId:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        },
    },
},{
    timestamps:false
})
module.exports =User