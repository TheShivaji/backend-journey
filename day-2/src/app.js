const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Notes is created",
  });
});

app.get("/notes" , (req , res) => {
  res.status(200).json({
    notes:notes
  })
})
app.delete("/notes/:index" , (req , res) => {
  delete notes[req.params.index]
  res.status(202).json({
    message : "Notes is completely deleted"
  })
})

module.exports = app;
