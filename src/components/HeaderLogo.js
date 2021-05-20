import React from 'react';
import Logo from '../assets/img/logo.svg';

function HeaderLogo(props) {
    return (
        <div>
            <img src={Logo} alt="Windbnb"/>
        </div>
    );
}

export default HeaderLogo;