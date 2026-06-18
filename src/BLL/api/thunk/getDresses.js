import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDresses } from "../requests/womenDresses";

export const getDressThunk = createAsyncThunk(
    "womenDress/getDressThunk",
    async (_, thunkDressAPI) => {
        try {
            return await getDresses()
        }
        catch (error) {
            return thunkDressAPI.rejectWithValue(error.message)
        }
    }
)

