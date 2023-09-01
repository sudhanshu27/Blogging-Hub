
import Comment from '../models/comment.js';


export const newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json({msg: 'Comment saved successfully'});
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}


export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        // console.log(comments)
        return response.status(200).json(comments);
    } catch (error) {
        return response.status(500).json(error)
    }
}

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.deleteOne()

        response.status(200).json({msg: 'comment deleted successfully'});
    } catch (error) {
        response.status(500).json({error: error.message })
    }
}