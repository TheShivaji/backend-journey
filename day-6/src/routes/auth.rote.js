const express = require("express")
const User = require("../models/user.models")
const authRouter = express.Router()
const authController = require("../controllers/auth.controller")

authRouter.post("/register",authController.registerRoute)

authRouter.post("/login" , authController.loginRoutes)

