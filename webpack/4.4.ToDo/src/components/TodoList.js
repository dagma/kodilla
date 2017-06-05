import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

const TodoList = ({data, onClickList}) => {
	const todoNode = data.map((todo) => {
		return (<Todo todo={todo} key={todo.id} onClickList={onClickList}/>);
	});
	return (<ul className={style.todoList}>{todoNode}</ul>); 
}

/*
class TodoList extends React.Component {
	get data() {
		return this.props.data.map(data => <li key={data.id} onClick={this.props.onClickList}>{data.text}</li>);
	}

	render() {
		return (
			<ul>{this.data}</ul>
		)
	}
}
*/
export default TodoList;