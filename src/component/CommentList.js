import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCommentAction, editCommentAction } from '../redux/action/CommentAction'


export default function CommentList() {

    const dispatch = useDispatch()
    const comments = useSelector(state => state.CommentReducer.commentList)


    const handleEdit = (comment) => {
        dispatch(editCommentAction(comment))
    }

    const handleDelete = (commentId) => {
        dispatch(deleteCommentAction(commentId))
    }

    const renderCommentList = () => {
        return comments.map((comment, index) => {
            return (
                <div className="comment-list__item" key={index}>
                    <div className="comment-info">
                        <div className="comment-img">
                            <img src="./assets/images/avatar.jpg" alt="comment" />
                        </div>
                        <div className="comment-content">
                            <h3 className="name">{comment.name}</h3>
                            <p className="content">{comment.content}</p>
                        </div>
                    </div>
                    <div className="comment-control">
                        <button onClick={() => handleEdit(comment)} className="btn btn-small btn-primary">Edit</button>
                        <button onClick={() => handleDelete(comment.id)} className="btn btn-small btn-danger">Delete</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="comment-list">
            {renderCommentList()}
        </div>
    )
}
