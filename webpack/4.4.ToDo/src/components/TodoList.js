import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

const TodoList = props => {
 return(
     <div> 
       <ul className={style.todoList}>
         {
         	props.data.map(dat => {
         		return <Todo key={dat.id} id={dat.id} removeTodo={props.removeTodo} text={dat.text}/>
         	})}
       </ul>
     </div>
)}

export default TodoList;