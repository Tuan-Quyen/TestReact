import { createAction } from '@reduxjs/toolkit'
import { actions } from '../slice/homeSlice'
import { AppDispatch } from '../store';
import { fetchMovie } from '../thunk/movieThunk';

export const onLoadMore = async (page: number, dispatch: AppDispatch) => {
    dispatch(createAction(actions.onLoadMore.type))
    dispatch(fetchMovie(page))
}
export const onRefresh = (dispatch: AppDispatch) => {
    dispatch(createAction(actions.onRefresh.type))
    dispatch(fetchMovie())
}

export const onFetch = (dispatch: AppDispatch) => {
    dispatch(fetchMovie())
}