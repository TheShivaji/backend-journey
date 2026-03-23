require("dotenv").config()
const app = require("./src/app")
const connectDatabase = require("./src/config/database")


connectDatabase()

app.listen(3000 , () => {
  console.log ("server is on port 3000")
})
