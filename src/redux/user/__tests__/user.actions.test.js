import {testAction} from '../../../helpers/testsHelper'

import {userActionTypes} from '../user.types';
import {userCredSignInStart, userCredSignInSuccess, userAutoSignInSuccess} from '../user.actions';

describe('user actions tests', ()=>{
    const mockError = 'mockError'
    const mockAuth = {email:'mock@mail.com', password: 'mockPassword1A'}
    const mockUser = {currentUser: {}, userChecked: true, userStatus: true}
    testAction(userCredSignInStart, userCredSignInStart(mockAuth.email, mockAuth.password), {
        type: userActionTypes.USER_CRED_SIGNIN_START,
        payload: mockAuth
    })
    testAction(userCredSignInSuccess, userCredSignInSuccess(mockUser), {
        type: userActionTypes.USER_CRED_SIGNIN_SUCCESS,
        payload: {user:mockUser}
    })
    testAction(userAutoSignInSuccess, userAutoSignInSuccess(mockUser), {
        type: userActionTypes.USER_AUTO_SIGNIN_SUCCESS,
        payload: {user:mockUser}
    })

})