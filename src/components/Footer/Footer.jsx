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
                <div>
                    <Link className='footer' to='/contact'>Contact</Link>
                    <Link className='footer' to='/privacy'>Privacy</Link>
                    <Link className='footer' to='/conditionGeneral'>Conditions Générales</Link>
                </div>

                <div className='flex  justify-end'>
                    <a href="https://twitter.com/MobilPhone8893" target="_blank" rel="noreferrer">
                        <img className='logoFooterSocial' src={twitter} alt="twitter"/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61553843163551" target='_blank' rel="noreferrer">
                        <img className='logoFooterSocial' src={fb} alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/mobilphonecda/" target='_blank' rel="noreferrer">
                        <img className='logoFooterSocial' src={insta} alt="instagram"/>
                    </a>
                </div>
            </footer>
        </>
    )
}
export default Footer
