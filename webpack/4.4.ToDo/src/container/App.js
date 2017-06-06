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
				],
			title: 'Lista rzeczy do zrobienia',
			inputValue: ''
		};
	}
	changeInputValue(newVal) { 
		this.setState({inputValue: newVal});
	}
	addTodo(val) {
		if (val.length > 0) {
			const todo = {
				text: val,
				id: uuid.v4(),
			};
			const data = [...this.state.data, todo];
			this.setState({
				data: data, 
				inputValue: ''
			});
		}
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: remainder});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title title={this.state.title}/>
				<TodoForm 
					inputValue={this.state.inputValue}  
					addTodo={ (val) => this.addTodo(val)}
					changeInputValue={ (val) => this.changeInputValue(val)}
				/>
				<TodoList 
					data={this.state.data} 
					removeTodo={ (id) => this.removeTodo(id)}
    			/>
			</div>
		);
	}
}

export default App;