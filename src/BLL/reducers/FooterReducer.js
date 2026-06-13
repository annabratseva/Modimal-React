import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: []
}

const FooterSlice = createSlice({
    name: "footer",
    initialState,
    reducers: {
        getEmail: (state, action) => {
            state.email = action.payload.email
        }
    }
})

export const {getEmail} = FooterSlice.actions
export default FooterSlice.reducer