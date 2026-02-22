const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
  title : String,
  description : String,
})

const createModel = mongoose.model("notes" , createSchema)

module.exports = createModel
