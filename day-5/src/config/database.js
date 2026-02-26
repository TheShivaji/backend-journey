const mongoose = require("mongoose")

function databaseConnect() {
  mongoose.connect(process.env.MOGO_URL)
  .then(()=>{
    console.log("Database is connencted")
  })
}

module.exports = databaseConnect
