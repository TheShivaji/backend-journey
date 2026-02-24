const express = require("express")
const createModel = require("./models/notes.model")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.post("/api/notes", async (req, res) => {
  const { title, discription } = req.body
  const notes = await createModel.create({
    title,
    discription
  })
  res.status(201).json({
    message: "Notes is created",
    notes
  })

})

app.get("/api/notes", async (req, res) => {
  const notes = await createModel.find()

  res.status(201).json({
    message: "Notes is succefully is featch",
    notes
  })
})

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id
  await createModel.findByIdAndDelete(id)

  res.status(201).json({
    message: "Notes is delete"
  })
})

app.patch("/api/notes/:id", async (req, res) => {
  const { description } = req.body

  await noteModel.findByIdAndUpdate(id, { description })

  res.status(200).json({
    message: "Note updated successfully."
  })
})

module.exports = app
