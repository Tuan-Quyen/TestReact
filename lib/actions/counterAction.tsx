import { createAction } from '@reduxjs/toolkit'
import * as type from '../type/counterType'

export const increase = createAction(`${type.COUNTER}/${type.INCREASE_COUNT}`)
export const decrease = createAction(`${type.COUNTER}/${type.DECREASE_COUNT}`)
export const inputValue = createAction<number>(`${type.COUNTER}/${type.INPUT_VALUE}`)