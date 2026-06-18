import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    email: null,
    password: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true,
            state.email = action.payload.email
            state.password = action.payload.password
        },
        logout: (state) => {
            state.isAuth = false,
            state.email = null,
            state.password = null
        } 
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer