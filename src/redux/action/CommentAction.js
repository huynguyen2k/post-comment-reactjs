import { DELETE_COMMENT, EDIT_COMMENT, POST_COMMENT, UPDATE_COMMENT } from '../type/CommentType'

export const postCommentAction = (comment) => {
    return {
        type: POST_COMMENT,
        comment
    }
}

export const editCommentAction = (comment) => {
    return {
        type: EDIT_COMMENT,
        comment
    }
}

export const updateCommentAction = (comment) => {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}

export const deleteCommentAction = (commentId) => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}