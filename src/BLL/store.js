import { configureStore } from "@reduxjs/toolkit";

import footerReducer from "./reducers/FooterReducer"
import authReducer from "./reducers/AuthReducer"

export const store = configureStore({
    reducer: {
        footer: footerReducer,
        auth: authReducer
    }
})