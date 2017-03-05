// @flow
import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  onClick = () => {
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ comment: target.value });
  }

  render() {
    return (
      <div className="comment-box">
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button onClick={this.onClick}>Comment</button>
        </div>
      </div>
    );
  }
}

CommentBox.propTypes = {
  saveComment: React.PropTypes.func.isRequired,
};

export default CommentBox;
