import {connect} from 'react-redux';
import Comment from './Comment';
import {addComment, thumbUpComment } from './actions'; //thumbDownComment
console.log("CommentContainer");

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text)),
	thumbUpComment: (id) => dispatch(thumbUpComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);