import React from 'react';
import style from './Todo.css';

const Todo = ({todo, onClickList}) => {
	return (<li className={style.SingleRow} onClick={() => {onClickList(todo.id)}}>{todo.text}</li>);
}
export default Todo;