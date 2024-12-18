const express = require("express");

const router = express.Router();

// Import Controllar
const { dummyLink } = require("../controllars/likeControllar");
const  createComments = require("../controllars/comentControllar");
const { createPost} = require("../controllars/postControllar");


// Mapping Create
router.get("/dummyrouter", dummyLink);
router.post("/comments/creat", createComments.createComment);
router.post("/post/creat", createPost);


// export
module.exports = router;