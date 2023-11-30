import { createSlice } from '@reduxjs/toolkit';
export const LoggedSlice = createSlice({
    name: 'isLogged',
    initialState: {
        value: false
    },
    reducers: {
        isLoggedIn: (state, {payload}) => {
            state.isLogged = payload;
        }
    }
});
export const { isLoggedIn } = LoggedSlice.actions;
export default LoggedSlice.reducer;
