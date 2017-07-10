// Actions type
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


// Action creators
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    };
}

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

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: id,
		thumb: 'UP'
	};
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id,
		thumb: 'DOWN'
	};
}

// Bound action creator
const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));

// Example
boundAddComment('nowy komentarz!');
boundEditComment(4, 'edytowany komentarz');
boundRemoveComment(6);
boundThumbUpComment(8);
boundThumbDownComment(3);