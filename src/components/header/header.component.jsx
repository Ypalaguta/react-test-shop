import React from 'react';

import HeaderIcon from '../header-icon/header-icon.styles'

import {default as HeaderContainer, HeaderLink, IconLink} from './header.styles'

function Header(props) {
    return (
        <HeaderContainer>
            <IconLink to='/'> 
                <HeaderIcon src='/pet-icon.jpg' />
            </IconLink>
            <HeaderLink to='/'>Shop</HeaderLink>
            <HeaderLink to='/contacts'>Contacts</HeaderLink>
            <HeaderLink to='/auth'>Sign In</HeaderLink>
            <HeaderLink to='/cart'>Cart</HeaderLink>
        </HeaderContainer>
    );
}

export default Header; 