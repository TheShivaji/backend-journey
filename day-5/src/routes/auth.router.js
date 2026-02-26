const express = require("express")
const userModel = require("../models/user.model")
const authRoute = express.Router()
const jwt = require("jsonwebtoken")
authRoute.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  const ifuserExist = await userModel.findOne({ email })
  if (ifuserExist) {
    return res.status(400).json({
      message: "Email already exists"
    })
  }
  const user = await userModel.create({
    name,
    email,
    password
  })
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email
    },
    process.env.JWT
  )
  res.cookie("JWT_token", token)
  res.status(201).json({
    message: "User created successfully",
    user,
    token
  })
})
module.exports = authRoute
