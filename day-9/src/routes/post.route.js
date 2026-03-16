const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middleware/auth.middleware")

postRouter.post("/", upload.single("Pushparaj"), identifyUser, postController.createPostController)

postRouter.get("/", identifyUser ,postController.getPostController)

postRouter.get("/:postID", identifyUser ,postController.getPostDetailController)

module.exports = postRouter
