import {createSelector} from "reselect";

export const selectCart = store => store.cart;

export const selectVisible = createSelector(
    [selectCart],
    cart => cart.visible
)