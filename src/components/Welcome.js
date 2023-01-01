import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


export default function Welcome() {
  const logInState = useSelector((state) => state.logIn.logInArray);
  console.log(logInState)
  return (
    <>
      {/* <Navbar/>
    <div className='text-center'>
      <h1>Welcome to {logInState.userName}</h1>
    </div> */}
      {/* <Navbar/> */}
      <Navbar />
      {logInState === null ? <div className='text-center'><h1>Please Login first</h1></div> : <>
        <div className='text-center'>
          <h1>Welcome to {logInState.userName}</h1>
          <div>
            {/* <h1>My Tasks</h1> */}
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </>}
    </>
  )
}
