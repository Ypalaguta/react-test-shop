import {userActionTypes} from '../user.types';
import userReducer, {INITIAL_STATE} from '../user.reducer'
import {testActionDispatch} from '../../../helpers/testsHelper'


describe('user reducer tests', () => {
    const mockUser = {currentUser: {}, userChecked: true, userStatus: true}
    test('should return initial state', () => {
        expect(userReducer(undefined, {})).toEqual(INITIAL_STATE)
    })
    testActionDispatch(
        userActionTypes.USER_GOOGLE_AUTH_SUCCESS,
        userReducer(INITIAL_STATE, {
            type: userActionTypes.USER_GOOGLE_AUTH_SUCCESS,
            payload: {user: mockUser}
        }),
        {
            ...INITIAL_STATE,
            currentUser: mockUser,
            userChecked: true
        }
    )
})