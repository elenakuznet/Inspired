import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from "../const";

export const fetchColors = createAsyncThunk(
    "colors/fetchColors",
    async() => {
        const response = await fetch(COLORS_URL);
        const data = await response.json();
        return data;
    }
)

const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        status: 'idle',
        colorList: [],
        error: null,
    },
    reducers: {
    }
}
)