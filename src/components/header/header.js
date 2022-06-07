import React from "react";
import './header.css';
import Logo from '../../images/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Header (){
    return(
        <>
            <nav className='navbar'>
                <img className='logo' src={Logo} alt='' />
            </nav>
            <div id='contact'>
                <AnchorLink href='#quemsomos' id="links">Sobre a empresa </AnchorLink>
            </div>
        </>

    );
}

export default Header;