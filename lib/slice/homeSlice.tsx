import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "../thunk/movieThunk";

interface HomeState {
    data: any[],
    page: number,
    totalPage: number,
    error: string,
    isLoading: boolean
}

const initialState: HomeState = {
    data: [],
    page: 1,
    totalPage: 0,
    error: '',
    isLoading: false
}

const homeSlice = createSlice({
    name: 'HOME',
    initialState,
    reducers: {
        onLoadMore: (state) => {
            state.page += 1
        },
        onRefresh: (state) => {
            state.page = 1
            state.totalPage = 0
            state.data = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovie.pending, (state) => {
            if (state.page == 1) {
                state.isLoading = true
            }
            state.error = ''
        }).addCase(fetchMovie.fulfilled, (state, action) => {
            state.data = state.data.concat(...action.payload['results'])
            state.totalPage = action.payload['total_pages']
            state.isLoading = false
        }).addCase(fetchMovie.rejected, (state, action) => {
            state.error = action.error.message!
            state.isLoading = false
        })
    },
})

export const actions = homeSlice.actions;
export default homeSlice.reducer;