// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images/Header/logo.svg';
import {HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline/index.js";
import Product from "../../views/Product/Product.jsx";
import {Link} from "react-router-dom";

const Header = () => {
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
                </div>
            </div>


        </header>

    );
};
export default Header
