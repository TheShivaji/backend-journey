const mongoose = require("mongoose")

const createSchema = new mongoose.Schema({
  name:String,
  email:{
    type:String,
    unique : [true , "This email adress are already use"]
  },
  password : String,
})

const userModel = mongoose.model("users" , createSchema)

module.exports = userModel

