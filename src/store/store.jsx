import authReducer from './LoggedSlice.jsx'
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

/**
 * Configuration de la persistance des informations de l'authentification
 * @type {{storage, key: string}}
 */

const authPersistConfig = {
    key: "auth",
    storage: storage,
};

/**
 * Reducer qui permet de stocker tous les persists
 * @type {Reducer<CombinedState<{auth: {value: boolean} & PersistPartial}>>}
 */


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

/**
 * Configuration du store
 * @type {EnhancedStore<CombinedState<{auth: ({value: boolean}&PersistPartial)}>, unknown, (Middleware<ThunkDispatch<any, undefined, AnyAction>, any, ThunkDispatch<any, undefined, AnyAction>> & {withExtraArgument<ExtraThunkArg, State=any, BasicAction=AnyAction extends Action<any>>(extraArgument: ExtraThunkArg): ThunkMiddleware<State, BasicAction, ExtraThunkArg>})[], [StoreEnhancer]>}
 */
export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);
