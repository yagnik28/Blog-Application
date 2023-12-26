const { Post } = require("../model/index");

async function createPost(req, res) {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        return res.json({ msg: "Post Created Successfully." })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error occured while creating post." })
    }
}

async function getAllPosts(req, res) {
    const category = req.query.category;
    let posts;
    try {
        if(category){
            posts = await Post.find({ categories: category });
        }
        else {
            posts = await Post.find({});
        }
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({ msg: error.msg })
    }
}

async function getPost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        return res.json(post)
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
}

async function updatePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({ msg: "Post Not Found." });
        }
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
        return res.json({ msg: "Post Updated Successfully." })
    } catch (error) {
        return res.status(500).json({ msg: error.msg })
    }
}

async function deletePost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({ msg: "Post Not Found" });
        }
        try {
            await Post.deleteOne({_id: req.params.id});
            return res.json({ msg: "Post Deleted Successfully." });
        } 
        catch (error) {
            return res.status(500).json({ msg: error.msg });
        }
    } catch (error) {
        return res.status(500).json({ msg: error.msg });
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
};