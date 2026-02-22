const connectDatabase = require("./config/database")
const app = require("./app")
require("dotenv").config();
connectDatabase();

app.listen(process.env.PORT , ()=>{
  console.log("Server is running now")
})
