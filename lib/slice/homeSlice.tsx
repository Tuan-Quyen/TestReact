import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL, API_KEY } from "../baseApi";
import { useAppDispatch } from "../store";
import { getData, onError, onResponse } from "../actions/homeAction";

interface HomeState {
    data: any[],
    page: number,
    totalPage: number,
    error: string,
    isLoading: boolean
}

// Define the initial state using that type
const initialState: HomeState = {
    data: [],
    page: 1,
    totalPage: 0,
    error: '',
    isLoading: false
}
// Define dispatch
//const dispatch = useAppDispatch();

const homeSlice = createSlice({
    name: 'HOME',
    initialState,
    reducers: {
        getData: (state) => {
            state.isLoading = true
            fetch(BASE_URL + 'movie/popular?language=en-US&page=' + state.page + '&api_key=' + API_KEY)
                .then(response => response.json())
                .then(json => {
                    state.data.push(json) // sử dụng state.data.push thay vì dispatch(onResponse(json))
                    state.isLoading = false // sử dụng state.isLoading thay vì dispatch(onResponse(json))
                })
                .catch(error => {
                    state.error = error // sử dụng state.error thay vì dispatch(onError(error))
                    state.isLoading = false // sử dụng state.isLoading thay vì dispatch(onError(error))
                });
        },
        onLoadMore: (state) => {
            state.page += 1
            // sử dụng fetchData thay vì dispatch(getData())
            state.isLoading = true
            getData()
        },
        onRefresh: (state) => {
            state.page = 0
            state.totalPage = 0
            state.data = []
            // sử dụng fetchData thay vì dispatch(getData())
            state.isLoading = true
            getData()
        }
    }
})

export const actions = homeSlice.actions;
export default homeSlice.reducer;