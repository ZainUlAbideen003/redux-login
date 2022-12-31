import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from "../src/reducers/SignUpReducers";
import logInReducer from "../src/reducers/LogInReducers";
import todoReducer from "./reducers/TodoReducers";

export const store = configureStore({
    reducer:{
        signUp : signUpReducer,
        logIn : logInReducer,
        todoTasks : todoReducer,
    }
})