import express from 'express'
import dbConnect from './Config/dbConnect.js'
import userAuthRouter from './Routers/userAuthRouter.js'
const app= new express()
dbConnect()


app.use('/user/auth',userAuthRouter)
app.listen(5000,()=>{
    console.log("app running on port 5000")
})