import Axios from './AxiosService.jsx';
import { jwtDecode } from 'jwt-decode';
const login = (credentials) => {
    logout();
    return Axios.post('/login_check', credentials);
};
const setToken = (token) => {
    return localStorage.setItem('token', token);
};
const getToken = () => {
    return localStorage.getItem('token');
};
const removeToken = () => {
    localStorage.removeItem('token');
};
const isLogged = () => {
    let token = getToken();
    if (token) {
        const { exp: expiration } = jwtDecode(token);
        if (expiration < Date.now() / 1000) {
            console.log('connection expired');
            logout();
            return false;
        }
        return true;
    }
    return false;
};
let logout = () => {
    localStorage.removeItem('token');
    delete Axios.defaults.headers.common.Authorization;
};
export const TokenService = { login, setToken, getToken, removeToken, isLogged, logout };
