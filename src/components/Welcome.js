import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';


export default function Welcome() {
    const logInState = useSelector((state) => state.logIn.logInArray);
 console.log(logInState)
  return (
    <>
    <Navbar/>
    <div className='text-center'>
      <h1>Welcome to {logInState.userName}</h1>
    </div>
    </>
  )
}
