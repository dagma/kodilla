import React from 'react';
const Todo = ({onClick}) => {
	let input;
	return (
		<div>
			<input 
				ref={node => {input = node;}} 
				type="text" 
				placeholder="napisz zadanie" 
			/>
			<button onClick={() => {
				onClick(input.value);
				input.value = ''; 
			}}>dodaj</button>
		</div>
	);
}
export default Todo;