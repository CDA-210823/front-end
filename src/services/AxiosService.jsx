import axios from 'axios';
import { TokenService } from './TokenService';
const Axios = axios.create({
    baseURL: 'http://localhost:8000/api',
});
Axios.interceptors.request.use(request => {
    if (TokenService.isLogged()) {
        request.headers['Authorization'] = 'Bearer ' + TokenService.getToken();
    }
        return request;
    },
    (error) => Promise.reject(error),
);
export default Axios;
