import { createSlice } from '@reduxjs/toolkit';
import Employees from "../Components/Employees";



export const userSlice = createSlice({
    name:"users",
    initialState: { value: Employees },
    reducers:{
        addUser:(state, action) =>{
            state.value.push(action.payload)

        },
        deleteUser: (state, action) =>{
            state.value = state.value.filter((user)=> user.id !== action.payload.id)
        },
        update: (state, action) =>{
        state.value.map((user)=> {
            if(user.id === action.payload.id) {
                user.Name= action.payload.Name;
               
            }
        })
        },
    }
});


    export const {addUser, deleteUser, update} = userSlice.actions
    export default userSlice.reducer