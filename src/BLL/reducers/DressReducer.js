import { createSlice } from "@reduxjs/toolkit";
import { getDressThunk } from "../api/thunk/getDresses";

const initialState = {
    dresses: [],
    loading: false,
    error: null,
}

const dressSlice = createSlice({
    name: "womenDress",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getDressThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getDressThunk.fulfilled, (state, action) => {
            state.loading = false
            state.dresses = action.payload
        })
        .addCase(getDressThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
}) 

export default dressSlice.reducer