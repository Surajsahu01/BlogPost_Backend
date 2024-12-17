
const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    Post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
    },
    user :{
        type : String,
        required:true, 
    },
});

module.exports = mongoose.model("Like", likeSchema);