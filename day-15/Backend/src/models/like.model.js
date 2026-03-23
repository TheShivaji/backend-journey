const mongoose = require("mongoose");


const LikeSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

LikeSchema.index({ postId: 1, userId: 1 }, { unique: true })
const likeModel = mongoose.model("Like", LikeSchema);

module.exports = likeModel  