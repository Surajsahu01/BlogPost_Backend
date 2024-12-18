const Post = require("../models/postModel");
const Comment = require("../models/comentModel");

// build a logic

exports.createComment = async(req,res) =>{
    try{
        // fetch data from req body
        const {post,user,body} = req.body;

        // crete a comment object
        const comment = new Comment({
            post,user,body
        });

        // save the new comment into the database
        const savedComment = await comment.save();

        // find the post by Id, ass new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true})
                            .populate("coments")
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