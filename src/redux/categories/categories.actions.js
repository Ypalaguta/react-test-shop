import {categoriesActionTypes} from './categories.types';

export const fetchCategoriesStart = () => ({
    type: categoriesActionTypes.CATEGORIEST_FETCH_START,
});
export const fetchCategoriesSuccess = (data) => ({
    type: categoriesActionTypes.CATEGORIEST_FETCH_SUCCESS,
    payload: {data}
});
export const fetchCategoriesFailure = (err) => ({
    type: categoriesActionTypes.CATEGORIEST_FETCH_FAILURE,
    payload: {err}
});