const Comment = require("../model/comment")

async function newComment(req, res) {
    try {
        const comment = await new Comment(req.body);
        await comment.save();
        return res.json({ msg: "Comment Saved Successfully." })
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
}

async function getComments(req, res) {
    try {
        const comments = await Comment.find({ postId: req.params.id });
        return res.json(comments);
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
}

async function deleteComment(req, res) {
    try {
        await Comment.deleteOne({_id: req.params.id});
        return res.json({ msg: "Comment Deleted Successfully." })
    } catch (error) {
        return res.status(500).json({ msg: error.msg })
    }
}

module.exports = {
    newComment,
    getComments,
    deleteComment
};