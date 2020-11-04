import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import mainReducer from "./main/main.reducer";
import categoriesReducer from "./categories/categories.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    main: mainReducer,
    categories: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);