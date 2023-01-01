import { React, useEffect, useState } from 'react';
// import TodoItem from './TodoItem';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../reducers/TodoReducers";
const TodoList = () => {
	// const todos = useSelector((state) => state.todoTasks);
	const [message, setMessage] = useState([]);
	const [message2, setMessage2] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch("http://localhost:8080/welcome")
			.then((res) => res.json())
			.then((data) => {
				setMessage(data.users)
				setMessage2(data.users.todo)
				// console.log("data.users", data.users)

			});
	}, []);

	const removeTask = (key) => {

		// console.log(todos);
		dispatch(deleteTask({
			key,
			// data: todos
		}))
	}

	return (
		<div>
			{

				message.map((item, key) => {
					return <div key={key}>
						{
							item.todo.map((value, index) => {
								return <>
									<div className="container text-center">
										<div class="row m-2 justify-content-center" key={index}>
											<div className="col-3">{value}</div>
											<div className="col-3">
												<button className="btn btn-dark" onClick={() => {
													removeTask(index);
												}}>Delete</button></div>

										</div>
									</div>
								</>
							})
						}


					</div>
				})

				// message.map((item, key) => {
				// 	return <li key={key}>{item.name}
				// 		{
				// 			item.todo.map((value, index) => <li key={index}>{value}</li>)
				// 		}
				// 	</li>
				// })

				// message.map(item=><li>{item.name}</li>)

				// message.map((item, index) => (
				// 	<li key={index}>
				// 		<div>
				// 			<li key={index}>{item.todo.map((value) => <li>{value}
				// 				<button className="remove-task-button">Delete</button>
				// 			</li>)}</li>

				// 		</div>
				// 		{/* <div>
				// 			<button className="remove-task-button" onClick={() => {
				// 				removeTask(index);
				// 			}}>Delete</button>
				// 		</div> */}
				// 	</li>

				// ))
			}
		</div>
	);
};

export default TodoList;