import {cartActionTypes} from './cart.types';

const INITIAL_STATE = {
    items: {}, //object of keys (itemId) and value {count, size etc }
    visible: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_VISIBLE:
            return {...state, visible: !state.visible}
        default:
            return state;
    }
}

export default cartReducer;