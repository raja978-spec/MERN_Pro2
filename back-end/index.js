const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')


app=express()

require('dotenv').config({ path: ".env" })

app.use(bodyparser.urlencoded({}))
app.use("/items/api",require('./routers/api/Item'))

const DBurl=process.env.DATABASE_URL
mongoose.connect(DBurl, {useNewUrlParser: true, useUnifiedTopology: true});
let database=mongoose.connection
database.on('connected',()=>console.log('Connected...'))
database.on('err',(err)=>console.log("Error"))

app.listen(5000,()=>console.log("Server running"))


