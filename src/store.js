import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from "../src/reducers/SignUpReducers";
import logInReducer from "../src/reducers/LogInReducers";

export const store = configureStore({
    reducer:{
        signUp : signUpReducer,
        logIn : logInReducer,
    }
})