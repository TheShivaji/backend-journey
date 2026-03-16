const mongoose = require("mongoose")

function connectDatabase() {
  try {
    mongoose.connect(process.env.MOGODB_URL)
    console.log("database is connected")
  }
  catch (error){
    console("Error is database connection" , error.message)
  }
}

module.exports = connectDatabase
