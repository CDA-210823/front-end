import {HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline/index.js";
import {Link} from "react-router-dom";
import LogoIcon from "../../assets/images/Header/logo.png";
import { useSelector } from 'react-redux';
const Header = () => {
    const isConnected = useSelector((state) => state.auth.isLogged);
    return (
        <header>
            <div className='flex justify-between items-center'>
                <div>
                    <img className='logo' src={LogoIcon} alt="logo"/>
                </div>
                <div className='flex'>
                    <Link to='/'>
                        <HomeIcon className='headerIcon'/>
                    </Link>
                    <Link to='/search'>
                        <MagnifyingGlassIcon className='headerIcon'/>
                    </Link>
                    {isConnected &&  <Link to='/profile'><UserIcon className='headerIcon'/></Link>}
                    {isConnected && <Link to='cart'><ShoppingCartIcon className='headerIcon'/></Link>}
                </div>
                <div>
                    <Link className='linkHeader' to='/product'>Produits</Link>
                    {!isConnected && <Link className='linkHeader' to='/registration'>Inscription</Link>}
                    {!isConnected && <Link className='linkHeader' to='/login'>Connexion</Link>}
                    {isConnected && <Link className='linkHeader' to='/logout'>Déconnexion</Link>}
                </div>
            </div>
        </header>
    );
};
export default Header;
