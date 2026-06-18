import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: [],
}

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const exists = state.favorite.find(p => p.id === action.payload.id)
            if (!exists) {
                state.favorite.push(action.payload)
            }
        },
        removeFromFavorite: (state, action) => {
            state.favorite = state.favorite.filter(p => p.id !== action.payload)
        }
    }
})

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer