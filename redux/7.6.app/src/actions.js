// Actions type
export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
/*
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
*/
var uuid = require('uuid-v4');

// Action creators
export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid()
    };
}

export function thumbUpComment(commentId) {
	return {
		type: THUMB_UP_COMMENT,
		id: commentId
	};
}


/*
function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text: text,
		id: id,
	};
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	};
}

function thumbDownComment(id, vote) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id,
		vote: vote
	};
}
*/