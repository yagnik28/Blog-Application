const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    comments: {
        type: String,
        required: true
    }
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;