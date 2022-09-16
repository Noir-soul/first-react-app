import React, { Component } from "react";

class Comment extends Component {

    render() {
        return(
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">{this.props.body}</p>
                <div className="comment-footer">
                    <a className="comment-footer-delete">
                        Delete comment
                    </a>
                </div>
            </div>
        )
    }
}

class CommentBox extends Component {

    _getComments() {
        let commentList = [
            {id: 1, author: 'Morgan McCircuit', body: 'Great picture'},
            {id: 2, author: 'Bending Bender', body: 'Excellent stuff'},
            {id: 3, author: 'Deez Nuts', body: 'good good good'},
            {id: 4, author: 'Bat Man', body: 'hmmm'},
        ];

        return commentList.map((comment) => {
            return( <Comment author={comment.author} body={comment.body} key={comment.id}/>)
        })
    }

    _getCommentsTitle(count) {
         return (count == 0) ? "No comments yet" : count == 1 ? "1 comment" : `${count} comments`
    }
    
    render() {
        const comments = this._getComments();
        return(
            <div className="comment-box">
                <h3>Comments</h3>
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                <div className="comment-list">
                    {comments}
                </div>        
            </div>
        )
    }
}


export default CommentBox;