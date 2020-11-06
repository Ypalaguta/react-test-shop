import {userActionTypes} from "./user.types";

export const userCredSignInStart = (email, password) => ({
    type: userActionTypes.USER_CRED_SIGNIN_START,
    payload: {email, password}
});
export const userCredSignInSuccess = (user) => ({
    type: userActionTypes.USER_CRED_SIGNIN_SUCCESS,
    payload: {user}
});
export const userAutoSignInSuccess = (user) => ({
    type: userActionTypes.USER_AUTO_SIGNIN_SUCCESS,
    payload: {user}
});
export const userAutoSignInFailure = (err) => ({
    type: userActionTypes.USER_AUTO_SIGNIN_FAILURE,
    payload: {err}
});
export const userCredSignInFailure = (err) => ({
    type: userActionTypes.USER_CRED_SIGNIN_FAILURE,
    payload: {err}
});

export const userSignOutStart = () => ({
    type: userActionTypes.USER_SIGNOUT_START,
});
export const userSignOutSuccess = () => ({
    type: userActionTypes.USER_SIGNOUT_SUCCESS,
});
export const userSignOutFailure = (err) => ({
    type: userActionTypes.USER_SIGNOUT_FAILURE,
    payload: {err}
});

export const userCredSignUpStart = (displayName, email, password) => ({
    type: userActionTypes.USER_CRED_SIGNUP_START,
    payload: {displayName, email, password}
});
export const userCredSignUpSuccess = (user) => ({
    type: userActionTypes.USER_CRED_SIGNUP_SUCCESS,
    payload: {user}
});
export const userCredSignUpFailure = (err) => ({
    type: userActionTypes.USER_CRED_SIGNUP_FAILURE,
    payload: {err}
});

export const userGoogleAuthStart = () => ({
    type: userActionTypes.USER_GOOGLE_AUTH_START,
});
export const userGoogleAuthSuccess = (user) => ({
    type: userActionTypes.USER_GOOGLE_AUTH_SUCCESS,
    payload: {user}
});
export const userGoogleAuthFailure = (err) => ({
    type: userActionTypes.USER_GOOGLE_AUTH_FAILURE,
    payload: {err}
});