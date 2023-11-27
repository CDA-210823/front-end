import { createSlice } from '@reduxjs/toolkit';
import {TokenService} from '../services/TokenService.jsx';
export const LoggedSlice = createSlice({
    name: 'isLogged',
    initialState: {
        value: false
    },
    reducers: {
        isLoggedIn: (state) => {
            state.isLogged = TokenService.isLogged()
        }
    }
});
export const { isLoggedIn } = LoggedSlice.actions;
export default LoggedSlice.reducer;
