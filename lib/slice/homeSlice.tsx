import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "../thunk/movieThunk";
import { Alert } from "react-native";

interface HomeState {
    data: any[],
    page: number,
    totalPage: number,
    isLoading: boolean
}

const initialState: HomeState = {
    data: [],
    page: 1,
    totalPage: 0,
    isLoading: false
}

const showAlert = (message: string) => {
    Alert.alert('Unable to interact with server!',
        `Error: ${message}`,
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
        ])
}

const homeSlice = createSlice({
    name: 'HOME',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state, action) => {
            //init loading status: handle action for fetch movie.
            if (action.meta.arg == 1) {
                state.isLoading = true
                state.totalPage = 0
                state.data = []
            }
        }).addCase(fetchMovie.fulfilled, (state, action) => {
            state.data.push(...action.payload['results'])
            state.totalPage = action.payload['total_pages']
            state.page += 1
            state.isLoading = false
        }).addMatcher(
            (action) => action.type.includes('rejected'),
            (state, action) => {
                showAlert(action.payload)
                state.isLoading = false
            }
        )
    },
})

export const actions = homeSlice.actions;
export default homeSlice.reducer;