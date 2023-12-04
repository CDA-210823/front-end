import {jwtDecode} from "jwt-decode";
import Axios from './AxiosService.jsx';

const getMail = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const {username: email} = jwtDecode(token);
        return email;
    }
    return '';
}
const getUser = () => {
    const data = {
            email: getMail(),
        };
    return Axios.post('/user/searchbyemail', data);
}
export const UserService = {getMail, getUser};
