import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/TodoReducers";

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask(value)
		);

		setValue("");
	};

	return (
		<div className="container mt-5" style={{ width: "20%" }}>
                <h1 className='text-center my-5'>Todo List</h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="text" style={{ textAlign:"center" }} placeholder='Please Enter your todo' onChange={(event) => setValue(event.target.value)} />
                    </div>
                    <button className="btn btn-dark mb-5 mx-auto d-grid" type='submit'>Add</button>
                
                </form>
            </div>
		// <div className="add-todo">
		// 	<input
		// 		type="text"
		// 		className="task-input"
		// 		placeholder="Add task"
		// 		value={value}
		// 		onChange={(event) => setValue(event.target.value)}
		// 	></input>

		// 	<button className="task-button" onClick={onSubmit}>
		// 		Add
		// 	</button>
		// </div>
	);
};

export default AddTodo;