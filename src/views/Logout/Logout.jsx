import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TokenService } from '../../services/TokenService';
const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        TokenService.logout();
        navigate('/login');
        window.location.reload();
    }, []);
    return (
        <></>
    )
}
export default Logout
