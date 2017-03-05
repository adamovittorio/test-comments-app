import React from 'react';

const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => <li key={comment}>{comment}</li>)}
  </ul>
);

CommentList.propTypes = {
  comments: React.PropTypes.arrayOf(React.PropTypes.string),
};

CommentList.defaultProps = {
  comments: [],
};

export default CommentList;
