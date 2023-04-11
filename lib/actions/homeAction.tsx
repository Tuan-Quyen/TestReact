import { createAction } from '@reduxjs/toolkit'
import { actions } from '../slice/homeSlice'

export const getData = createAction(actions.getData.type)
export const onResponse = createAction<{}>(actions.onResponse.type)
export const onError = createAction<string>(actions.onError.type)
export const onLoadMore = createAction(actions.onLoadMore.type)
export const onRefresh = createAction(actions.onRef.type)