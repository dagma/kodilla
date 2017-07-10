import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions';

const initialState = {
	comments: [],
	users: []
};

/*
function reducer(state, action) {
	if (!state) {
		return initialState;
	}
	return state;
}
*/
// Składnia ES6
function reducer(state = initialState, action) {
	switch(action.type) {
		case ADD_COMMENT:
			return Object.assign({}, state, {
				comments: [
				{
					id: action.id,
					text: action.text,
					votes: 0
				}
				, ...state]
			});
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
		case EDIT_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => {
					if (comment.id === action.id) {
						comment.text = action.text;
					}
				});
			});
		case THUMB_UP_COMMENT: 
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => {
					if (comment.id === action.id) {
						comment.votes++;
					}
				});
			});
		case THUMB_DOWN_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => {
					if (comment.id === action.id) {
						comment.votes--;
					}
				});
			});
		default: 
			return state;
	}
}