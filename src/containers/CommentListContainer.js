import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
