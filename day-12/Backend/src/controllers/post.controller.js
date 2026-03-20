const postModel = require("../models/post.model");
const ImageKit = require("imagekit");
const { tofile } = require("imagekit");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function createPostController(req, res) {

  if (!req.file) {
    return res.status(400).json({
      message: "Image file is required"
    })
  }

  try {
    const file = await imagekit.upload({
      file: req.file.buffer.toString("base64"),
      fileName: Date.now() + ".jpg",
      folder: "cohort-2-insta-clone-posts"
    })
    const post = await postModel.create({
      caption: req.body.caption,
      Imageurl: file.url,
      user: decoded.id
    })
    res.status(201).json({
      message: "Post created successfully",
      post
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Error creating post"
    })
  }
}

async function getPostController(req, res) {

  const userId = req.user.id
  const postId = req.params.postId


  const post = await postModel.findById({
    user: userId
  })

  res.status(200).json({
    message: "Post feacth successfully",
    post
  })
}

async function getPostDetailController(req, res) {



  try {

    const userID = req.user.id
    const post = await postModel.findById(req.params.postID)

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      })
    }

    const isValidUser = userID.toString() === post.user.toString()

    if (!isValidUser) {
      return res.status(401).json({
        message: "User is not authorized"
      })
    }

    res.status(200).json({
      message: "Post fetch successfully",
      post
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Server error"
    })
  }
}
module.exports = {
  createPostController,
  getPostController,
  getPostDetailController
}