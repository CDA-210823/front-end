// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images/Header/logo.svg';
import {HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline/index.js";
import Product from "../../views/Product/Product.jsx";
import {Link} from "react-router-dom";
import {TokenService} from "../../services/TokenService.jsx";
import Registration from "../../views/Registration/Registration.jsx";
import Login from "../../views/Login/Login.jsx";
import Logout from "../../views/Logout/Logout.jsx";

const Header = () => {
    const isConnected = TokenService.isLogged();
    return (
        <header>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='logo' src={logo} alt="logo"/>
                </div>
                <div className='flex'>
                    <HomeIcon className='headerIcon'/>
                    <MagnifyingGlassIcon className='headerIcon'/>
                    <UserIcon className='headerIcon'/>
                    <ShoppingCartIcon className='headerIcon'/>
                </div>
                <div>
                    <Link className='linkHeader' to={Product}>Produits</Link>
                    {!isConnected && <Link className='linkHeader' to={Registration}>Inscription</Link>}
                    {!isConnected && <Link className='linkHeader' to={Login}>Connexion</Link>}
                    {isConnected && <Link className='linkHeader' to={Logout}>Déconnexion</Link>}
                </div>
            </div>
        </header>

    );
};
export default Header
