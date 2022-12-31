import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users : []
}
export const TodoReducer = createSlice({
    name: "todoTasks",
    initialState,
    reducers:{
        addTask: (state, action)=>{
            state.users.push({name: action.payload});
        },
        deleteTask: (state, action)=>{
            // console.log(state.users)
            console.log('key',action.payload.key);
            const test =[...action.payload.data.users];
            test.splice(action.payload.key,1);
            state.users = test;
        }
    }
});

export const {addTask, deleteTask} = TodoReducer.actions;

export default TodoReducer.reducer;