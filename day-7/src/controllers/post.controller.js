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

  console.log(req.body, req.file)

  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({
      message: "Token not provided, Unauthorized access"
    })
  }

  if (!req.file) {
    return res.status(400).json({
      message: "Image file is required"
    })
  }
  let decoded
  try {
    decoded = jwt.verify(token, process.env.JWT)
  } catch (error) {
    console.log("Error in post controller", error.message)
    return res.status(401).json({
      message: "User is not authorized"
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
module.exports = {
  createPostController
}