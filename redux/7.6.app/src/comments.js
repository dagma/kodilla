import {ADD_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, REMOVE_COMMENT } from './actions';

//, EDIT_COMMENT 

export default function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
       	case THUMB_UP_COMMENT: 
			return state.map(comment => {
					if (comment.id === action.id) {
						return {...comment, votes: comment.votes + 1}
					}
				return comment;
			});
		case THUMB_DOWN_COMMENT:
			return state.map(comment => {
					if (comment.id === action.id) {
						return {...comment, votes: comment.votes - 1}
					}
				return comment;
			});
		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id);
 /*
		case EDIT_COMMENT:
			return state.comments.filter(comment => {
					if (comment.id === action.id) {
						comment.text = action.text;
					}
			});
 */
		default: 
			return state;
			
    }
}