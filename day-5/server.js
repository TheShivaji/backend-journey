require("dotenv").config()
const app = require("./src/app")
const databaseConnect = require("./src/config/database")

databaseConnect();

app.listen(3000 , () => {
  console.log("Server is on 3000 port")
})
