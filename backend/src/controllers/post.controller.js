const Post = require('../models/Post');

exports.createPost = async (req,res) => {
    const { title, content, author } = req.body 

    try{const newPost  = await Post.create({
        title : title, 
        content : content, 
        author : author
    });
    
        res.status(201).json({
            message : "Post created successfully",
            post : newPost
        })
    }
    catch(err) {
        res.status(400).json({
            message : "Failed to create post",
            err : err.message
        })
    }
}

exports.getPosts = async (req,res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit
    
    try{
        const posts = await Post.find({})
            .sort({createdAt : -1})
            .limit(limit)
            .skip(skip)
         

        res.status(200).json({
            message : "Posts retrieval successfull",
            posts : posts
        })
    }
    catch(err){
        res.status(400).json({
            message : "Failed to get post ",
            err : err.message
        })
    }
}

exports.getPostbyId = async (req,res ) => {
        const postId = req.params.id;
        
        try {
            const post = await Post.findById(postId)
            .populate("author")
            .exec() 

            if(!post) {
                return res.status(404).json({
                    message : "Post not found",
                    success : false 
                })
            }

            res.status(200).json({
                message : "post retrieval successfull",
                post : post 
            })
        }
    catch(err) {
            res.status(404).json({
                message : "Post not found",
                err : err.message 
            })
    }
}


exports.deletePostById = async (req,res) => {
            const postId = req.params.id

        try {
            const deletePost = await Post.findByIdAndDelete(postId)
            
            if(!deletePost){
                 return res.status(404).json({
                    message : "post not found",
                    success : false 
                })
            }
            res.status(200).json({
                message : "delted post successfully",
                success : true
            })
            
        }
        catch(err) {
            res.status(404).json({
                message : "Post not found", 
                err : err.message
            })
        }
}