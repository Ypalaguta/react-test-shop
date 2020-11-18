import {takeLeading, call} from 'redux-saga/effects'

import {testWatchSaga} from '../../../helpers/testsHelper';
import {userActionTypes} from '../user.types'
import {credSignUp, googleAuth, takeCredSignUp} from '../user.sagas'
import {auth, provider, signInWithGoogle} from "../../../firebase/firebase.utils";

describe('user sagas tests', () => {
    describe('USER_CRED_SIGNUP_START', () => {
        testWatchSaga(userActionTypes.USER_CRED_SIGNUP_START, takeCredSignUp, credSignUp, takeLeading)
    })

    describe('googleAuth', () => {
        auth.signInWithPopup = jest.fn()
        const worker = googleAuth();
        const actualYield = worker.next().value;
        const expectedYield = call([auth, auth.signInWithPopup], provider)
        expect(actualYield).toEqual(expectedYield);
    })
})