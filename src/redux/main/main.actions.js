import {mainActionTypes} from './main.types';

export const mainFetchStart = () => ({
    type: mainActionTypes.MAIN_FETCHING_START
})
export const mainFetchSuccess = (data) => ({
    type: mainActionTypes.MAIN_FETCHING_SUCCESS,
    payload: {data}
})
export const mainFetchFailure = (err) => ({
    type: mainActionTypes.MAIN_FETCHING_FAILURE,
    payload: {err}
})