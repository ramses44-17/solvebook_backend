const express = require('express')
const userRegister = require('./controllers/userRegister')
const userRoute = express.Router()

userRoute.post('/register',userRegister)







module.exports = userRoute