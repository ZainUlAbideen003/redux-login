import React from 'react';
// import TodoItem from './TodoItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask }  from "../reducers/TodoReducers";
const TodoList = () => {
	const todos = useSelector((state) => state.todoTasks);
	const dispatch = useDispatch();
	const removeTask=(key)=>{

		// console.log(todos);
		dispatch(deleteTask({
			key,
			data:todos
		}))
	}
	return (
		<ul className="tasks-list">
			{
				todos.users.map((todo, index) => (
					<li key={index}>
						<div>
							{todo.name}
						</div>
						<div>
							<button className="remove-task-button" onClick={()=>{
								removeTask(index);
							}}>Delete</button>
						</div>
					</li>
					// <TodoItem key={index}  title={todo.name} completed={todo.status} />
				))
			}
		</ul>
	);
};

export default TodoList;