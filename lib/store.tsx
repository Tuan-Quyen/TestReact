import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import counterSlice from './slice/counterSlice';
import homeSlice from './slice/homeSlice';

const allReducers = combineReducers({
    counter: counterSlice,
    home: homeSlice
});

const store = configureStore({ reducer: allReducers });

export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector