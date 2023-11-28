import { createSlice } from '@reduxjs/toolkit';
import {TokenService} from '../services/TokenService.jsx';
export const LoggedSlice = createSlice({
    name: 'isLogged',
    initialState: {
        value: false
    },
    reducers: {
        isLoggedIn: (state, {payload}) => {
            console.log(payload);
            state.isLogged = payload;
            console.log(state.isLogged)
        }
    }
});
export const { isLoggedIn } = LoggedSlice.actions;
export default LoggedSlice.reducer;
