import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name : 'user',
    initialState: {
        email: null,
        id: 0,
        firstName: '',
        lastName: '',
        isAuth: false
    },
    reducers: {
        setUser: (state , {payload}) => {
            state.email = payload.email;
            state.id = payload.id;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.isAuth = payload.isAuth;
        },
    }
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;