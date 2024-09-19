const express = require('express')
const mongoose= require('mongoose')
const url ='mongodb://localhost/userDBex'

const app = express()


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected...')
})
const userRouter = require('./routes/user')
app.use('/users',userRouter)

app.listen(9000,() => {
    console.log('Server started')
})