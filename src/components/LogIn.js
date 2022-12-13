import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { logInRed } from '../reducers/LogInReducers';
import { Link, useNavigate } from 'react-router-dom';


export default function LogIn() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signState = useSelector((state) => state.signUp.signUpArray);

    const logSubmit = (e) => {
        e.preventDefault();
        //
        const userObj = {
            userEmail: userEmail,
            userPassword: userPassword
        }
        console.log('object from Log In = ', userObj)
        //
        // dispatch(logInRed(userObj))


        let resp = signState.find((e) => {
            return e.userEmail === userObj.userEmail
        })

        if (resp === undefined) {
            alert("user email does not exist");
        }
        else {

            let resp2 = signState.find((e) => {
                return e.userPassword === userObj.userPassword
            })
            if (resp2 !== undefined) {
                // alert("Successfull!")
                dispatch(logInRed(resp))
                setUserEmail('');
                setUserPassword('');
                navigate("/Welcome");

            }
            else {
                alert('password does not match')
            }
        }

    }

    return (
        <>
            <Navbar />
            <div className="container mt-5" style={{ width: "20%" }}>
                <h1 className='text-center my-5'>Log In</h1>
                <form onSubmit={logSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail2" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder='Please Enter your Email Here' aria-describedby="emailHelp" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Please Enter your Password Here' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-dark mx-auto d-grid" type='submit'>Log In</button>
                    <p className='text-center my-3'>Create new account! <Link to="/SignUp" >Sign Up</Link></p>
                </form>
            </div>
        </>

    );
}
