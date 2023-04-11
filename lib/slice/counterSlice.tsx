import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as type from '../type/counterType'

// Define a type for the slice state
interface CounterState {
    value: number,
    inputValue: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
    inputValue: 1
}

const counterSlice = createSlice({
    name: type.COUNTER,
    initialState,
    reducers: {
        [type.INCREASE_COUNT]: (state) => {
            state.value += state.inputValue;
        },
        [type.DECREASE_COUNT]: (state) => {
            state.value -= state.inputValue;
        },
        [type.INPUT_VALUE]: (state, action: PayloadAction<number>) => {
            state.inputValue = action.payload
        }
    }
})

export default counterSlice.reducer;