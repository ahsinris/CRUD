const express =require('express')
const app =express()
const dotenv = require('dotenv')
dotenv.config()
app.use(express.json())
const sequelize = require('./database/mysql')

const router = require('./router/userRouter')
app.use(router)
sequelize.sync()
sequelize.authenticate()
.then(()=>{
    console.log('connection established sucessfully')
})
.catch((err)=>{
    console.log('error in connection',err)
})

app.listen(process.env.PORT,()=>{
    console.log(`port listned at ${process.env.PORT} `)
})
