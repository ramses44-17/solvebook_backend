const mongoose = require('mongoose');
const registerSchema = require('../../../schemas/registerschema');
const bcrypt = require('bcrypt')

const userRegister = async (req,res)=>{
const usersModel = mongoose.model('User')
const { error, value } = 
registerSchema.validate(req.body);

if (error) {
  throw error.details[0]
} 

try {
  const existUser = await usersModel.findOne({ email: req.body.email });
  console.log(existUser);
  if (existUser) {
    return res.status(409).json({
      message: 'Email already exists',
    });
  }
  
  
} catch (error) {
  res.status(500).json({
    message: 'An error occurred when inserting user'
  });
}




console.log(value)
  res.status(200).json({
    message:"user register successfuly"
  })
  
}


module.exports = userRegister