import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TokenService } from '../../services/TokenService';
import { toast } from 'react-toastify';
import {useDispatch} from "react-redux";
import {isLoggedIn} from '../../store/LoggedSlice.jsx';
import {destroyUser} from '../../store/UserSlice.jsx';
const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        TokenService.logout();
        dispatch(isLoggedIn());
        dispatch(destroyUser());
        navigate('/login');
        toast('Vous avez bien été déconnecté');
    }, []);
    return (
        <></>
    )
}
export default Logout
