const express = require("express");
const createModel = require("./models/notes.model")

const app = express();

app.use(express.json())

app.post("/notes", async (req, res) => {
  const { title, description } = req.body
  const notes = await createModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: 'notes is created',
    notes
  })
})
app.get("/notes", async (req, res) => {
  const notes = await createModel.find()
  res.status(200).json({
    message: "Notes is sussecfully featch",
    notes
  })
})
module.exports = app
