const express = require("express");
const { signup, login, image, posts, comments } = require("../controller/index");
const { upload, authenticateJwt } = require("../middleware/index");

const { uploadImage, getImage } = image;
const { createPost, getAllPosts, getPost, updatePost, deletePost } = posts;
const { newComment, getComments, deleteComment } = comments;

const router = express.Router(); 

router.post("/signup", signup);
router.post("/login", login);

router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage)

router.post("/create", authenticateJwt, createPost);
router.get("/posts", authenticateJwt, getAllPosts);
router.get("/post/get/:id", authenticateJwt, getPost);
router.put("/post/update/:id", authenticateJwt, updatePost);
router.delete("/post/delete/:id", authenticateJwt, deletePost);

router.post("/comment/new", authenticateJwt, newComment);
router.get("/comments/:id", authenticateJwt, getComments);
router.delete("/comment/delete/:id", authenticateJwt, deleteComment)

module.exports = router;