const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"username must is required"]
  },
  email:{
    type:String,
    required:[true,"email is required"],
    unique:true
  },
  password:{
    type:String,
    required:[true,"password is required"]
  },
  description:{
    type:String
  },
  image_url:{
    type:String
  },
  email_verified:{
    type:Boolean,
    default:false
  },
  verification_code:{
    type:String
  }
},
{
  timestamps:true
}
)


const userModel = mongoose.model('User',userSchema)

module.exports = userModel