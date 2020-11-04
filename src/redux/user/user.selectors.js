import {createSelector} from 'reselect';

export const selectUser = store => store.currentUser;

export const selectUserStatus = createSelector(
    [selectUser],
    user => !!user
)