const Post = require('../models/Post');

exports.getPostByOrder = async(req,res) => {
        const {cursor, limit = 10 } = req.query;
        
         try{
                const query = cursor ? {createdAt : {$lt : new Date(cursor)}} : {};

                const posts  = Post.find(query)
                .sort({createdAt : -1})
                .limit(parseInt(limit) + 1)
                .exec();

                

                res.status(200).json({
                        message : "posts retrieval by order successfull",
                        posts : posts
                })
        }
        catch(err){
                res.status(404).json({
                        message : "Failed to retrieve posts by order",
                        err : err
                })
        }
}