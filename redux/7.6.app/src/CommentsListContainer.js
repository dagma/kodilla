import {connect} from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => ({
	comments: state.comments
});
console.log(CommentsList);
export default connect(mapStateToProps)(CommentsList);