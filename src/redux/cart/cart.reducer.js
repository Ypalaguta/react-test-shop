import {cartActionTypes} from './cart.types';

const INITIAL_STATE = {
    items: {}, //object of keys (itemId) and value {count, size etc }
    visible: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.CART_TOGGLE_VISIBLE:
            return {...state, visible: !state.visible}
        case cartActionTypes.CART_ITEM_ADD: {
            const currentItem = action.payload.item;
            const newItems = {...state.items};
            if (!newItems[currentItem.id]) newItems[currentItem.id] = {...currentItem, count: 1}
            else newItems[currentItem.id].count++;
            return {...state, items: newItems}
        }
        case cartActionTypes.CART_ITEM_REMOVE: {
            const currentItem = action.payload.item;
            const newItems = {...state.items};
            delete newItems[currentItem.id];
            return {...state, items: newItems}
        }
        case cartActionTypes.CART_ITEM_DECREACE: {
            const currentItem = action.payload.item;
            const newItems = {...state.items};
            if (newItems[currentItem.id].count>1) newItems[currentItem.id].count--;
            return {...state, items: newItems}
        }
        default:
            return state;
    }
}

export default cartReducer;