import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        id: 0,
        firstName: '',
        lastName: '',
        address: {
            numberStreet: '',
            nameStreet: '',
            postalCode: '',
            city: '',
        }
    },
    reducers: {
        regUser: (state, {payload}) => {
            state.email = payload.email;
            state.id = payload.id;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.address.numberStreet = payload.address[0].number_street;
            state.address.nameStreet = payload.address[0].street;
            state.address.postalCode = payload.address[0].postal_code;
            state.address.city = payload.address[0].city;
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

export const {regUser, destroyUser} = UserSlice.actions;
export default UserSlice.reducer;
