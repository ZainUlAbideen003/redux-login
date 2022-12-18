import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // logInArray : "",
    logInArray : null,
  };

export const LogInSlice = createSlice({
    name: "LogIn",
    initialState,
    reducers: {
        logInRed: (state, action) => {
            console.log('Log In Action.payload=', action.payload)
            state.logInArray = action.payload;
        }
    }
})

export const { logInRed } = LogInSlice.actions;


export default LogInSlice.reducer;