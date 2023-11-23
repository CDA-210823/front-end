// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom";
import twitter from'../../assets/images/Footer/twitter.svg';
import fb from '../../assets/images/Footer/fb.svg';
import insta from'../../assets/images/Footer/insta.svg';



const Footer = () => {
    return (
        <>
            <footer>
                <Link className='footer' to='/contact'>Contact</Link>
                <Link className='footer' to='/privacy'>Privacy</Link>
                <Link className='footer' to='/conditionGeneral'>Conditions Générales</Link>
                <div className='flex w-10/12 justify-end'>
                    <img className='logoFooterSocial' src={twitter} alt="twitter"/>
                    <img className='logoFooterSocial' src={fb} alt="facebook"/>
                    <img className='logoFooterSocial' src={insta} alt="instagram"/>
                </div>
            </footer>
        </>
    )
}
export default Footer
