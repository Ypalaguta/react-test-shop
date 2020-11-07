import {userActionTypes} from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    userChecked: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.USER_CRED_SIGNIN_SUCCESS:
        case userActionTypes.USER_AUTO_SIGNIN_SUCCESS:
        case userActionTypes.USER_GOOGLE_AUTH_SUCCESS:
            return {...state, currentUser: action.payload.user, userChecked: true}
        case userActionTypes.USER_AUTH_CHECKED:
            return {...state, userChecked: true}
        case userActionTypes.USER_SIGNOUT_SUCCESS:
            return {...INITIAL_STATE, userChecked: true}
        default:
            return state;
    }
}

export default userReducer;