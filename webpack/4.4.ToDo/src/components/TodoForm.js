import React from 'react';
const TodoForm = props => {
	return (
		<div>
			<input
				type = "text" 
				placeholder = "napisz zadanie"
				value = {props.inputValue} 
				onChange = {props.changeInputValue}
			/>
			<button 
				onClick={() => {
					props.addTodo(props.inputValue);
				}}

			>
				dodaj
			</button>
		</div>
	)
}

export default TodoForm;