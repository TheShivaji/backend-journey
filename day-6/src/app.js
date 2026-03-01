const express = require("express")
const app = express();

app.use(express.Router())
app.use(express.json())

module.exports = app
