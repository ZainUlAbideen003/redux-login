import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    signUpArray : []
  };

export const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        signUpRed: (state, action) => {
            console.log('Sign Up Action.payload=',action.payload)
            state.signUpArray = [...state.signUpArray, action.payload];
        }
    }
})

export const { signUpRed } = signUpSlice.actions;


export default signUpSlice.reducer;