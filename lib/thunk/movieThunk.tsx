import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, API_KEY } from "../baseApi";

export const fetchMovie = createAsyncThunk("FETCH_MOVIE",
    async (page: number, thunkAPI) => {
        return fetch(BASE_URL + 'movie/popular?language=en-US&page=' + page + '&api_key=' + API_KEY)
            .then(response => response.json())
            .then(json => thunkAPI.fulfillWithValue(json))
            .catch(error => thunkAPI.rejectWithValue(error.message))
    }
)