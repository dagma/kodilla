// Actions type
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
var uuid = require('uuid-v4');

// Action creators
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
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

function thumbUpComment(id, vote) {
	return {
		type: THUMB_UP_COMMENT,
		id: id,
		vote: vote
	};
}

function thumbDownComment(id, vote) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id,
		vote: vote
	};
}


export default removeComment;
export default editComment;
export default thumbDownComment;
export default thumbUpComment;
*/

export default addComment;