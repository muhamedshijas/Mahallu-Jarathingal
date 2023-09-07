import express from 'express'
import dbConnect from './Config/dbConnect.js'
const app= new express()

dbConnect()
app.listen(5000,()=>{
    console.log("app running on port 5000")
})