import {React, conte, useState} from 'react';
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/cart/cart.actions'
import HeaderIcon from '../header-icon/header-icon.styles'

import {default as HeaderContainer, HeaderLink, IconLink, LinkLike} from './header.styles'
import CartComponent from "../cart-popup/cart.component";

const countAndGetItemsCount = (cartObject) => {
    let items = 0;
    Object.keys(cartObject).forEach(key=> {
        let el = cartObject[key];
        items += el.count
    })
    return items?`(${items})`:'';
}

function Header(props) {
    const {cart} = props;
    return (<HeaderContainer>
            <IconLink to='/'>
                <HeaderIcon src='/pet-icon.jpg'/>
            </IconLink>
            <HeaderLink to='/'>Shop</HeaderLink>
            <HeaderLink to='/contacts'>Contacts</HeaderLink>
            <HeaderLink to='/auth'>Sign In</HeaderLink>
            <LinkLike onClick={props.toggleCart}>
                Cart
                {countAndGetItemsCount(cart.items)}
            </LinkLike>
            <CartComponent/>
        </HeaderContainer>
    );
}

export default connect(store=>({
    cart: store.cart
}), {toggleCart})(Header);