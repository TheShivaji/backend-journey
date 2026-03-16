const express = require("express")
const authRouter = require("./routes/auth.route")
const postRouter = require("./routes/post.route")
const userRouter = require("./routes/user.route")
const cookieParser = require("cookie-parser")
const app = express();


app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/" , userRouter)

module.exports = app
