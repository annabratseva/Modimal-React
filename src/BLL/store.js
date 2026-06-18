import { configureStore } from "@reduxjs/toolkit";

import footerReducer from "./reducers/FooterReducer"
import authReducer from "./reducers/AuthReducer"
import dressReducer from "./reducers/DressReducer"
import favoriteReducer from "./reducers/FavoriteReducer"

export const store = configureStore({
    reducer: {
        footer: footerReducer,
        auth: authReducer,
        womenDress: dressReducer,
        favorite: favoriteReducer
    }
})