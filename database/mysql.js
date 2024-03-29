const mysql =require('mysql2')
const Sequelize = require('sequelize')
const dotenv =require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE,process.env.DBUSER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:process.env.DIALECT
})

module.exports =sequelize