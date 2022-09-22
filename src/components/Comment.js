import React, { Component } from "react";

class Comment extends Component {

    _handleDelete(e) {
        e.preventDefault()
        this.props.onDelete(this.props.comment)
    }

    render() {

        return(
            <div className="comment">
                <p className="comment-header">{this.props.comment.author}</p>
                <p className="comment-body">{this.props.comment.body}</p>
                <div className="comment-footer">
                    <button onClick={this._handleDelete.bind(this)}>
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
        commentList: []
    }

    _saveComments(e) {
        let newComment = {}
        const target = e.target
        newComment.id = this.state.commentList.length + 1
        newComment.author = target.author.value
        newComment.body = target.body.value
        this.state.commentList.unshift(newComment)
        {this.setState({ commentList: this.state.commentList })}
        document.getElementById("myForm").reset();
        e.preventDefault()
    }

    _deleteComment(com) {
        const commentList = [...this.state.commentList]
        const commentIndex = commentList.indexOf(com)
        commentList.splice(commentIndex, 1)
        console.log(commentList)

        this.setState({ commentList })
    }

    _getComments() {
        return this.state.commentList.map((comment) => {
            return( <Comment comment={comment} key={comment.id} onDelete={this._deleteComment.bind(this)}/>)
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
                <div>
                    <br/>
                    <h3>Join the Discussion</h3>
                    <form id="myForm" onSubmit={this._saveComments.bind(this)}>
                        <input
                        name="author"
                        type="text"
                        placeholder="name"
                        required = "true"
                        /> 
                        <br/>
                        <textarea
                        name="body"
                        type="text"
                        placeholder="comment"
                        /> 
                        <br/>
                        <input type="submit"/>
                    </form>
                </div>
                <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
                <button onClick={() => {this.setState({ showComments: !this.state.showComments })}}>{buttonText}</button>
                {commentNodes}     
            </div>
        )
    }
}


export default CommentBox;