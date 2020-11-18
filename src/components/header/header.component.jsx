import {React, conte, useState} from 'react';
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/cart/cart.actions';
import HeaderIcon from '../header-icon/header-icon.styles';
import {Link} from 'react-router-dom';

import {default as HeaderContainer, HeaderLink, HeaderIconWrap, LinkLike} from './header.styles';
import CartComponent from "../cart-popup/cart.component";
import {createStructuredSelector} from "reselect";
import {selectCart} from "../../redux/cart/cart.selectors";
import {selectUserStatus} from "../../redux/user/user.selectors";
import {userSignOutStart} from "../../redux/user/user.actions";

const countAndGetItemsCount = (cartObject) => {
    let items = 0;
    Object.keys(cartObject).forEach(key => {
        let el = cartObject[key];
        items += el.count
    })
    return items ? `(${items})` : '';
}

export function Header(props) {
    const {cart, userStatus, userSignOutStart} = props;
    return (<HeaderContainer>
            <HeaderIconWrap to='/'>
                <Link to='/'>
                    <HeaderIcon src='/pet-icon.jpg'/>
                </Link>
            </HeaderIconWrap>
            <HeaderLink to='/'>Shop</HeaderLink>
            <HeaderLink to='/contacts'>Contacts</HeaderLink>
            {userStatus ? <LinkLike onClick={userSignOutStart}>Sign Out</LinkLike> :
                <HeaderLink to='/auth'>Sign In</HeaderLink>}
            <LinkLike onClick={props.toggleCart}>
                Cart
                {countAndGetItemsCount(cart.items)}
            </LinkLike>
            <CartComponent/>
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cart: selectCart,
    userStatus: selectUserStatus
});

export default connect(mapStateToProps, {toggleCart, userSignOutStart})(Header);