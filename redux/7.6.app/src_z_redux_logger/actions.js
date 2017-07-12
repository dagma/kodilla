import uuid from 'uuid';

// Actions type
export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
/*
const EDIT_COMMENT = 'EDIT_COMMENT';

*/


// Action creators
export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    };
}

export function thumbUpComment(commentId) {
	return {
		type: THUMB_UP_COMMENT,
		id: commentId
	};
}

export function thumbDownComment(commentId) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: commentId
	};
}
export function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
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



*/