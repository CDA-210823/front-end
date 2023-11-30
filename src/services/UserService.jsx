import {jwtDecode} from "jwt-decode";
import Axios from "./AxiosService.jsx";

const getMail = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const {username: email} = jwtDecode(token);
        return email;
    }
    return '';
}
const getId = async () => {
    let id = 0;
    const data = [
        {
            email: getMail(),
        }
    ];
    return Axios.post('/user/searchbyemail', data)
}
const getUsername = (id) => {

}
export const UserService = {getMail, getId};
