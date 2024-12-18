const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req,res) =>{
    try{
        const {post,user} = req.body;

        const like = new Like({
            post,user,
        });

        const savedLike = await like.save();

        const updatedLike = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new:true})
        .populate("likes").exec();

        res.json({
            post:updatedLike,
        });

    }
    catch(error){
        return res.status(500).json({
            error: "Error while creating likes.",
        });
    }
}

exports.unlikePost = async (req, res) =>{

    try{
        const {post,like} = req.body;

        const deleteLike = await Like.findOneAndDelete({post:post, _id:like});

        const postUpdated = await Post.findByIdAndUpdate(post, {$pull: {like:deleteLike._id}}, {new:true});

        res.json({
            post:postUpdated,
        })

    }
    catch(error){
        return res.status(500).json({
            error: "Error while creating unlikes.",
        });

    }
}


exports.dummyLink = (req,res) => {
    res.send("This is Dummy Page!")
};