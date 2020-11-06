import {createSelector} from 'reselect';

export const selectUser = store => store.user;

export const selectUserStatus = createSelector(
    [selectUser],
    user => !!user.currentUser
)
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)