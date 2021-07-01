import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import '../assets/css/style.css'



export default function Facebook() {
    return (
        <div className="wrapper">
            <div className="facebook">
                <h1 className="header">Facebook App</h1>
                <div className="comment-box">
                    <CommentList />
                    <CommentForm />
                </div>
            </div>
        </div>
    )
}
