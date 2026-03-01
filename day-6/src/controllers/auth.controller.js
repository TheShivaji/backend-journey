const User = require('../models/user.model')
const crypto = require('crypto')
const jwt = require("jsonwebtoken")
const bcrytjs = require("bcryptjs")

async function registerRoute(req, res) {
  const { username, email, password, bio, profileImage } = req.body
  const isAlreadyExist = await User.findOne({
    $or: [
      { email },
      { username }
    ]
  })
  if (!isAlreadyExist) {
    return res.status(400).json({
      message: "User not found"(isAlreadyExist.email == email ? "Email is already exist" : "Username i9s already exist")
    })
  }
  const hash = await bcrypt.hash(password , 10)

  const user = await User.create({
    username,
    email,
    password: hash,
    bio,
    profileImage
  })
  const token = jwt.sign({
    id: user._id
  },
    process.env.JWT
    , { expireIn: "1d" })

  res.cookie("jwt", token)

  res.status(201).json({
    message: "User is susccefully register ",
    username: user.username,
    email: user.email,
    bio: user.bio,
    profilepic: user.profileImage
  })
}

async function loginRoutes(req, res) {
  const { email, password } = req.body

  const isExist = await User.findOne({
    or:
      [
        { email },
        { password }
      ]
  }
  )

  if (!isExist) {
    return res.status(400).json({
      message: "USer not found"
    })
  }


  const isPassword = await bcrypt.compare(password , isExist.password)

  if(!isPassword){
    return res.status(400).json({
      message: "Invalid password"
    })

  }

  const token = jwt.sign({
    id:isExist._id,
  },process.env.JWT,{
    expiresIn:"1d"
  })
      res.cookie("token", token)


    res.status(200)
        .json({
            message: "User loggedIn successfully.",
            user: {
                username: isExist.username,
                email: isExist.email,
                bio: isExist.bio,
                profileImage: isExist.profileImage
            }
        })
}



module.exports = {
  registerRoute,
  loginRoutes
}
