import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
        
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand">User Management</p>
                <form className="d-flex" role="search">
                        <button className="btn btn-outline-light mx-2"><Link to="/" style={{textDecoration: "none", color: "red"}}>Log In</Link></button>
                        <button className="btn btn-outline-light mx-2"><Link to="/SignUp" style={{textDecoration: "none", color: "red"}}>Sign Up</Link></button>
                </form>
            </div>
        </nav>
        </>
    )
}
