import {selectUser, selectUserStatus, selectCurrentUser} from '../user.selectors';

import {testSelector} from '../../../helpers/testsHelper'

describe('user selectors tests', ()=>{
    const mockUser = {currentUser: {displayName: 'mockDisplayName', email:'mock@email.com'}, userChecked: true, userStatus: true}
    const mockStore = {
        user: mockUser
    }
    test('select user test', ()=>{
        expect(selectUser(mockStore)).toEqual(mockUser)
    })
    testSelector(selectUserStatus, true, mockUser)
    testSelector(selectCurrentUser, mockUser.currentUser, mockUser)
})