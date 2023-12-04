import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name : 'user',
    initialState: {
        email: '',
        id: 0,
        firstName: '',
        lastName: '',
        address: {
            0: {
            numberStreet: '',
            nameStreet: '',
            postalCode: '',
            city: '',
            }
        }
    },
    reducers: {
        regUser: (state , {payload}) => {
            state.email = payload.email;
            state.id = payload.id;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.address.numberStreet = payload.address.numberStreet;
            state.address.nameStreet = payload.address.nameStreet;
            state.address.postalCode = payload.address.postalCode;
            state.address.city = payload.address.city;
        },
        destroyUser: (state) => {
            state.email = '';
            state.id = 0;
            state.firstName = '';
            state.lastName = '';
            state.address.numberStreet = '';
            state.address.nameStreet = '';
            state.address.postalCode = '';
            state.address.city = '';
        }
    }
});

export const {  regUser, destroyUser } = UserSlice.actions;
export default UserSlice.reducer;
