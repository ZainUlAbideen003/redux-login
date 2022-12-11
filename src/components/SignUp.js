import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { signUpRed } from '../reducers/SignUpReducers';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const dispatch = useDispatch();

    const signSubmit = (e)  =>{
        e.preventDefault();
        //
        const userObj = {
            userName : userName,
            userEmail: userEmail,
            userPassword: userPassword
        }
        console.log('object from sign up = ',userObj)
        //
        dispatch(signUpRed(userObj))

        alert('You have been Register Successfully');

        setUserName('');
        setUserEmail('');
        setUserPassword('');
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5" style={{ width: "20%" }}>
                <h1 className='text-center my-5'>Sign Up</h1>
                <form onSubmit={signSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="exampleInputText1" placeholder='Please Enter your Full Name Here' value={userName} onChange={(e)=> setUserName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Please Enter your Email Here' aria-describedby="emailHelp" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Please Enter your Password Here' value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                    </div>
                    <button className="btn btn-dark mx-auto d-grid" type='submit'>Sign Up</button>
                    <p className='text-center my-3'>Already you have account? <Link to="/">Log In</Link></p>
                </form>
            </div>
        </>

    );
}

export default SignUp;
