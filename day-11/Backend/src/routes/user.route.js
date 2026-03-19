const express = require("express")
const followModel = require("../models/follow.model")
const userFollowController = require("../controllers/follow.controller")
const identifyUser = require("../middleware/auth.middleware")
const userRouter = express.Router()

//This api use for Follow user
userRouter.post("/follow/:username" , identifyUser ,userFollowController.followController )

//this for unfollow user

userRouter.post("/unfollow/:username" ,identifyUser , userFollowController.unfollowController )

module.exports = userRouter