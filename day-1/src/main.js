const express = require("express");

const app = express();
app.use(express.json())

const note = [];


app.post("/notes", (req, res) => {
  console.log(req.body);
  note.push(req.body)
  console.log(note)
  res.send("Created")
})
app.get("/notes", (req, res) => {
  res.send(note)
})

app.delete("/notes/:index", (req, res) => {
  delete note[req.params.index]
  console.log(note)

  res.send("Notes deleted susccessfully")
})
module.exports = app
