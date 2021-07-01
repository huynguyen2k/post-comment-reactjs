import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCommentAction, updateCommentAction } from '../redux/action/CommentAction'



export default function CommentForm() {

    const dispatch = useDispatch()
    const commentEdit = useSelector(state => state.CommentReducer.commentEdit)

    let [comment, setComment] = useState({
        name: '',
        content: ''
    })

    useEffect(() => {
        console.log('use effect')
        if (Object.keys(commentEdit).length > 0) {
            setComment({...commentEdit})
        }
    }, [commentEdit])

    const handleChange = (e) => {
        let { name, value } = e.target

        setComment({
            ...comment,
            [name]: value
        })
    }

    const resetCommentState = () => {
        setComment({
            name: '',
            content: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newComment = {...comment, id: Date.now()}
        dispatch(postCommentAction(newComment))

        resetCommentState()
    }

    const handleUpdate = () => {
        dispatch(updateCommentAction(comment))
        resetCommentState()
    }

    return (
        <form method="post" className="form-control" onSubmit={handleSubmit}>
            <div className="form-row">
                <label className="form-label" htmlFor="name">Name</label>
                <input value={comment.name} onChange={handleChange} className="full-row" type="text" id="name" name="name" required />
            </div>
            <div className="form-row">
                <label className="form-label" htmlFor="content">Content</label>
                <input value={comment.content} onChange={handleChange} className="full-row" type="text" id="content" name="content" required />
            </div>
            <div className="form-row">
                <button type="submit" className="btn btn-success">Post</button>
                <button onClick={handleUpdate} type="button" className="btn btn-primary">Update</button>
            </div>
        </form>
    )
}
