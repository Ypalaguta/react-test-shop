import {cartActionTypes} from './cart.types';

export const toggleCart = () => ({
    type: cartActionTypes.CART_TOGGLE_VISIBLE
})

export const cartItemAdd = (item) => ({
    type: cartActionTypes.CART_ITEM_ADD,
    payload: {item}
})
export const cartItemRemove = (item) => ({
    type: cartActionTypes.CART_ITEM_REMOVE,
    payload: {item}
})
export const cartItemDecrease = (item) => ({
    type: cartActionTypes.CART_ITEM_DECREACE,
    payload: {item}
})