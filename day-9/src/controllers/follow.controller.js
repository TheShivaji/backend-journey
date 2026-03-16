const followModel = require("../models/follow.model")
const userModel = require("../models/user.models")

async function followController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if (followerUsername == followeeUsername) {
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }
    const isAlreadyExist = await userModel.findOne({
        username: followeeUsername
    })
    if (!isAlreadyExist) {
        return res.status(400).json({
            message: "User you are trying to follow does not exist"
        })
    }
    const isAreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })
    if (isAreadyFollowing) {
        return res.status(400).json({
            message: `Your already following ${followeeUsername}`
        })
    }
    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    res.status(201).json({
        message: `You are now following ${followeeUsername}`,
        follow: followRecord
    })
}

async function unfollowController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isAlreadyFollow = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })
    if (!isAlreadyFollow) {
        return res.status(400).json({
            message: `Your not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isAlreadyFollow._id)

    res.status(200).json({
        message : `You have unfollowed ${followeeUsername}`
    })
}
module.exports = {
    followController,
    unfollowController
}