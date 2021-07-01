import { DELETE_COMMENT, EDIT_COMMENT, POST_COMMENT, UPDATE_COMMENT } from '../type/CommentType'

const defaultState = {
    commentList: [],
    commentEdit: {}
}


const CommentReducer = (state = defaultState, action) => {

    switch (action.type) {
        case POST_COMMENT: {
            state.commentList = [...state.commentList, action.comment]

            break
        }

        case EDIT_COMMENT: {
            state.commentEdit = action.comment

            break
        }

        case UPDATE_COMMENT: {
            let index = state.commentList.findIndex(comment => comment.id === action.comment.id)

            if (index !== -1) {
                state.commentList[index] = action.comment

                state.commentList = [...state.commentList]
            }

            break
        }

        case DELETE_COMMENT: {
            let index = state.commentList.findIndex(comment => comment.id === action.commentId)

            if (index !== -1) {
                state.commentList.splice(index, 1)

                state.commentList = [...state.commentList]
            }
            
            break
        }

        default:
    }

    return {...state}
}

export default CommentReducer