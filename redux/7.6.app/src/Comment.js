import React from 'react';

const Comment = ({text, votes, id, thumbUpComment}) => 
	<li>
		{text} <span>votes: {votes}</span> <button onCLick={() => thumbUpComment(id)}>Thumb up</button>
	</li>;

export default Comment;