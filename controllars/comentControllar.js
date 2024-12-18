const Post = require("../models/postModel");
const Comment = require("../models/comentModel");

// build a logic

exports.createComment = async(req,res) =>{
    try{
        // fetch data from req body
        const {post,user,body} = req.body;

        // crete a comment object
        const comment = new Comment({
            post,user,body,
        });

        // save the new comment into the database
        const savedComment = await comment.save();

        // find the post by Id, ass new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true})
                            .populate("comments")
                            .exec();

        res.json({
            post : updatedPost,
        });
    }
    catch(error){
            return res.status(500).json({
                error: "Error while creating comments.",
            });
    }
};

exports.deleteCreateComment = async(req,res) =>{
    try{
        const {post,comment} = req.body;

        const deletComment = await Comment.findOneAndDelete({post:post, _id:comment});

        const  postUpdate = await Post.findByIdAndUpdate(post, {$pull: {comment:deletComment._id} }, {new:true});

        res.json({
            post:postUpdate,
        })

    }
    catch(error){
        return res.status(500).json({
            error: "Error while deleting comments.",
        }); 
    }
}