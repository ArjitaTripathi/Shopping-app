import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './Routes/UserRouter.js'

const app = express()
const PORT = 3300
dotenv.config()

//middleware
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))

//connect db
//connect returns a promise i.e. .then and .error
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log('Connected to mongoDB'))
  .catch((err)=>console.log(err))

app.get('/', (req,res)=>{
    res.send("Hello API")
})
//Routes handling
app.use('/user',UserRouter)


app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})
