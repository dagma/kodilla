import React from 'react';
import uuid from 'uuid';
import style from '../App.css';
import Title from '../components/Title';
var lista = [
	{
		id: 1,
		text: 'Harry Potter',
	},
	{
		id: 2,
		text: 'Król Lew',
	}
]

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
	}
	addTodo(val) {
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		this.setState(remainder);
	}
	render() {
		return (
			<div className='style.TodoApp'>
				<Title data={this.state.data}/>
			</div>
		);
	}
}

export default App;