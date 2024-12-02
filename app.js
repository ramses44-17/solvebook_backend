require('dotenv').config()
const express = require('express')
const app = express()

const cors = require("cors")
const userRoute = require('./modules/user/user.routes')
const globalErrorsHandler = require('./handlers/globalhandlers')
const connectDB = require('./dbconnection')
const userModel = require('./models/User.model')

app.use(cors())

app.use(express.json())
app.use("/api/users",userRoute)
app.use(globalErrorsHandler)
connectDB()
app.use(userModel)

app.listen(4000,()=>{
  console.log("le serveur est lancé");
})




