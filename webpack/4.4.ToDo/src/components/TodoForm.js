import React from 'react';
const TodoForm = props => {
	return (
		<div>
			<input
				type="text" 
				placeholder="napisz zadanie"
				value={props.inputValue} 
				onChange={(e) => {
					props.changeInputValue(e.target.value);
				}}
			/>
			<button 
				onClick={() => { props.addTodo(props.inputValue); }}
			>
				dodaj
			</button>
		</div>
	)
}

export default TodoForm;