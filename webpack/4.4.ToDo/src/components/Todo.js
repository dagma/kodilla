import React from 'react';
const Todo = ({todo, onClickList}) => {
	return (<li onClick={() => {onClickList(todo.id)}}>{todo.text}</li>);
}
export default Todo;