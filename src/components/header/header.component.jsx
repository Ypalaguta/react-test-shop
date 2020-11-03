import {React, conte, useState} from 'react';
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/cart/cart.actions'
import HeaderIcon from '../header-icon/header-icon.styles'

import {default as HeaderContainer, HeaderLink, IconLink, LinkLike} from './header.styles'
import CartComponent from "../cart/cart.component";

function Header(props) {
    return (<HeaderContainer>
            <IconLink to='/'>
                <HeaderIcon src='/pet-icon.jpg'/>
            </IconLink>
            <HeaderLink to='/'>Shop</HeaderLink>
            <HeaderLink to='/contacts'>Contacts</HeaderLink>
            <HeaderLink to='/auth'>Sign In</HeaderLink>
            <LinkLike onClick={props.toggleCart}>Cart</LinkLike>
            <CartComponent/>
        </HeaderContainer>
    );
}

export default connect(null, {toggleCart})(Header);