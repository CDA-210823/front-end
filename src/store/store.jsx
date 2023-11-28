import authReducer from './LoggedSlice.jsx'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

const authPersistConfig = {
    key: "auth",
    storage: storage,
};

const cartPersistConfig = {
    key: "cart",
    storage: storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(
        authPersistConfig, authReducer
    ),

    cart: persistReducer(
        cartPersistConfig, authReducer
    )
});
export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});
export const persistor = persistStore(store);
