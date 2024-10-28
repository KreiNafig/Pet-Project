import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios/axios';

export const fetchText = createAsyncThunk('text/fetchText', async () => {
    const { data } = await axios.get('');
    return data;
});

const initialState = {
    data: null,
    status: 'idle',  
    error: null      
};

const getText = createSlice({
    name: 'text',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchText.pending, (state) => {
                state.status = 'loading';
                state.data = null;
            })
            .addCase(fetchText.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchText.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const text = getText.reducer;
