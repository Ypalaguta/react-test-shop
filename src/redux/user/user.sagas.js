import {takeLeading, takeLatest, put, all, call} from 'redux-saga/effects';
import {auth, getCurrentUser, signInWithGoogle} from "../../firebase/firebase.utils";
import {userActionTypes} from "./user.types";
import {
    userCredSignUpFailure,
    userCredSignInSuccess,
    userAutoSignInSuccess,
    userAutoSignInFailure,
    userSignOutFailure,
    userSignOutSuccess,
    userGoogleAuthSuccess,
    userGoogleAuthFailure, userAuthChecked
} from './user.actions';

export function* credSignUp({payload: {displayName, email, password}}) {
    try {
        const user = yield auth.createUserWithEmailAndPassword(email, password);
        if (!user) return;
        yield put(userAutoSignInSuccess(user))
    } catch (err) {
        yield put(userCredSignUpFailure(err));
    }
}

export function* credSignIn({payload: {email, password}}) {
    try {
        const user = yield auth.signInWithEmailAndPassword(email, password);
        if (!user) return;
        yield put(userCredSignInSuccess(user));
    } catch (err) {
        yield put(userCredSignUpFailure(err));
    }
}

export function* googleAuth() {
    try {
        const user = yield signInWithGoogle();
        if (!user) return;
        yield put(userGoogleAuthSuccess(user));
    } catch (err) {
        yield put(userGoogleAuthFailure(err));
    }
}

export function* credSignOut() {
    try {
        yield auth.signOut();
        yield put(userSignOutSuccess())
    } catch (err) {
        yield put(userSignOutFailure(err));
    }
}

//--------------------------

function* checkUser() {
    try {
        const user = yield getCurrentUser();
        if (!user) yield put(userAuthChecked());
        else yield put(userAutoSignInSuccess(user))
    } catch (err) {
        yield put(userAutoSignInFailure(err))
    }
}

export function* takeCredSignUp() {
    yield takeLeading(userActionTypes.USER_CRED_SIGNUP_START, credSignUp)
}

export function* takeCredSignIn() {
    yield takeLeading(userActionTypes.USER_CRED_SIGNIN_START, credSignIn)
}

export function* takeGoogleAuth() {
    yield takeLeading(userActionTypes.USER_GOOGLE_AUTH_START, googleAuth)
}

export function* takeSignOut() {
    yield takeLeading(userActionTypes.USER_SIGNOUT_START, credSignOut)
}

//--------------------------

export function* userSagas() {
    yield all([
        call(checkUser),
        call(takeCredSignUp),
        call(takeCredSignIn),
        call(takeGoogleAuth),
        call(takeSignOut),
    ])
}