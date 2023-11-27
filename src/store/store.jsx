import { LoggedSlice } from './LoggedSlice.jsx'
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        isLogged: LoggedSlice.reducer,
    }
});
