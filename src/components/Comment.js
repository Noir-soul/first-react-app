import React, { Component } from "react";

class Comment extends Component {

    render() {
        return(
            <div className="comment">
                <p className="comment-header">{this.props.comment.author}</p>
                <p className="comment-body">{this.props.comment.body}</p>
                <div className="comment-footer">
                    <button className="comment-footer-delete">
                        Delete
                    </button>
                </div>
                <hr></hr>
            </div>
        )
    }
}

class CommentBox extends Component {

    state = {
        showComments: false,
        commentList: [
            {id: 1, author: 'Morgan McCircuit', body: 'Great app'},
            {id: 2, author: 'Bending Bender', body: 'Excellent stuff'},
            {id: 3, author: 'Deez Nuts', body: 'good good good'},
            {id: 4, author: 'Bat Man', body: 'hmmm'},
        ]
    }

    _getComments() {
        return this.state.commentList.map((comment) => {
            return( <Comment comment={comment} key={comment.id}/>)
        })
    }
    
    _getCommentsTitle(count) {
         return (count == 0) ? "No comments yet" : count == 1 ? "1 comment" : `${count} comments`
    }
    
    render() {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = "Show comments";
        (this.state.showComments) ? ((commentNodes = <div className="comment-list">{comments}</div>) && (buttonText = "Hide comments")) : commentNodes;

        return(
            <div className="comment-box">
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                <button onClick={() => {this.setState({ showComments: !this.state.showComments })}}>{buttonText}</button>
                {commentNodes}     
            </div>
        )
    }
}


export default CommentBox;