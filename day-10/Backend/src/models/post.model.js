const mongoose = require("mongoose")

const postScehema = new mongoose.Schema({
  caption:{
    type:String,
    default:""
  },
  Imageurl:{
    type:String,
    required:[true , "Require to create a post"]
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:[true , "User is required to create a post"]

  }
})

const postModel = mongoose.model("post" , postScehema)


module.exports = postModel
