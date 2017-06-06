import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import TodoForm from '../components/TodoForm'
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
					{
						text: 'Nauczyć się Reacta',
						id: uuid.v4()
					},
					{
						text: 'Nauczyć się składni ES6',
						id: uuid.v4()
					}
				]
		};
		this.item = '';
	}
	addTodo(val) {
		console.log("val: "+val.length);
		if (val.length > 0) {
			const todo = {
				text: val,
				id: uuid.v4(),
			};
			const data = [...this.state.data, todo];
			this.setState({data});
		}
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title data={this.state.data}/>
				<TodoForm onClick={this.addTodo.bind(this)}/>
				<TodoList 
					data={this.state.data} 
					onClickList={this.removeTodo.bind(this)}
				/>
			</div>
		);
	}
}

export default App;