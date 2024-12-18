const express = require("express");

const router = express.Router();

// Import Controllar
const { dummyLink, likePost, unlikePost } = require("../controllars/likeControllar");
const  {createComment, deleteCreateComment} = require("../controllars/comentControllar");
const { createPost, getAllPosts} = require("../controllars/postControllar");
// const  deleteCreateComments = require("../controllars/comentControllar");


// Mapping Create
router.get("/dummyrouter", dummyLink);
router.post("/comments/creat", createComment);
router.post("/post/creat", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.post("/comments/delete", deleteCreateComment)



// export
module.exports = router;