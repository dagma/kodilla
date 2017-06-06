import React from 'react';
import style from './Todo.css';

const Todo = props => {
	return (
		<li className={style.SingleRow} onClick={() => {props.removeTodo(props.id)}} >{props.text}</li>
	)
}

export default Todo;