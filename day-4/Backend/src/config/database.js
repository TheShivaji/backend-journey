const mongoose = require("mongoose")

function connectDatabase() {
  mongoose.connect(process.env.MOGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
}

module.exports = connectDatabase
