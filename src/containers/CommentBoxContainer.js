import { connect } from 'react-redux';
import CommentBox from '../components/CommentBox';
import * as actions from '../actions';

export default connect(null, actions)(CommentBox);
