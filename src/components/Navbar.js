import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInRed } from '../reducers/LogInReducers';

export default function Navbar() {

    const logInState = useSelector((state) => state.logIn.logInArray);
    // console.log("Navbar=>", logInState)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let flag = true;

    if (logInState === null) {
        flag = false;
    }
    console.log("flag=>", flag)
    
    const logOut = (e) => {
        e.preventDefault();
        dispatch(logInRed(null));
        navigate('/');
    }

    return (
        <>
        
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
            <p className="navbar-brand"><Link to="/" style={{textDecoration: "none", color: "white"}}>User Management</Link></p>
                {
                    flag ? 
                    
                <form className="d-flex" role="search" onSubmit={logOut}>
                        <button className="btn btn-outline-light mx-2">Log Out</button>
                </form>
                
                :
                <form className="d-flex" role="search">
                        <button className="btn btn-outline-light mx-2"><Link to="/" style={{textDecoration: "none", color: "red"}}>Log In</Link></button>
                        <button className="btn btn-outline-light mx-2"><Link to="/SignUp" style={{textDecoration: "none", color: "red"}}>Sign Up</Link></button>
                </form>
                }
            </div>
        </nav>
        </>
    )
}
