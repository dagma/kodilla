import {connect} from 'react-redux';
import Comment from './Comment';
import {addComment, thumbUpComment, thumbDownComment, removeComment } from './actions';

const mapDispatchToProps = dispatch => ({
	addComment: (text) => dispatch(addComment(text)),
	removeComment: (id) => dispatch(removeComment(id)),
	thumbUpComment: (id) => dispatch(thumbUpComment(id)),
	thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);