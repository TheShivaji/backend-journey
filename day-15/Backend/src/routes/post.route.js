const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require("../middleware/auth.middleware")

postRouter.get("/feed", identifyUser, postController.getFeedController)

postRouter.get("/:postID", identifyUser, postController.getPostDetailController)

postRouter.get("/", identifyUser, postController.getPostController)

postRouter.post("/", upload.single("Pushparaj"), identifyUser, postController.createPostController)


postRouter.post("/like/:postID", identifyUser, postController.likePostController)


module.exports = postRouter
