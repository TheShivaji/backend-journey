const mongoose = require("mongoose")

const createSchma = new mongoose.Schema({
  title:String,
  discription:String,
})

const createModel = mongoose.model("notes" , createSchma)

module.exports = createModel
