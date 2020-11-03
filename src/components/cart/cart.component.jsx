import {React, useState} from 'react';
import {Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/cart/cart.actions'

import {CartContainer, ButtonLink} from './cart.style';


function CartComponent(props) {
    const {userStatus, toggleCart} = props;
    return props.visible ? (
        <CartContainer>
            {userStatus?<ButtonLink to='/checkout' onClick={toggleCart}>
                <Button variant="contained" color="primary">Checkout</Button>
            </ButtonLink>:<ButtonLink to='/auth' onClick={toggleCart}>
                <Button variant="contained" color="secondary">Sign in to process</Button>
            </ButtonLink>}
        </CartContainer>
        ) : null
}

export default connect(store=>({
    visible: store.cart.visible,
    userStatus: !!store.user.currentUser
}), {toggleCart})(CartComponent);