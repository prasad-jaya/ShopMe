import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const user = createSlice({
    name:'user',
    initialState:{
        isSignedIn: JSON.parse(localStorage.getItem('isSignedIn')) || false,
        email:'',
        password:''
    },
    reducers:{
        setSignedIn(state, action){
            state.isSignedIn = action.payload;
            localStorage.setItem('isSignedIn', JSON.stringify(action.payload));          
        },
        setUser(state, action){
            state.email = action.payload.email;
            state.password = action.payload.password;
            localStorage.setItem('email', JSON.stringify(action.payload.email));
            localStorage.setItem('password', JSON.stringify(action.payload.password));
        }
    }
});

export const {setSignedIn, setUser} = user.actions;
export const userReducer = user.reducer;

