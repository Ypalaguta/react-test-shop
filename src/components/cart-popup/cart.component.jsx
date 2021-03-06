import {React, useState} from 'react';
import {Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {toggleCart, cartItemDecrease, cartItemRemove, cartItemAdd} from '../../redux/cart/cart.actions'
import {Link} from 'react-router-dom';
import {Add, Remove, Close} from '@material-ui/icons';
import {createStructuredSelector} from "reselect";
import {selectCart, selectVisible} from "../../redux/cart/cart.selectors";
import {selectCategories} from "../../redux/categories/categories.selectors";
import {selectUserStatus} from "../../redux/user/user.selectors";

import {
    CartContainer,
    ButtonLink,
    CartItem,
    CartItemPic,
    CartItemDesc,
    CartItemsWrap,
    RemoveBlock,
    AddBlock,
    RemoveOneBlock,
    MobileButton,
} from './cart.style';
import {selectMain} from "../../redux/main/main.selectors";

const findCategoryOnMain = (main, category) => {
    return main.find(el => el.name === category);
}

function CartComponent(props) {
    const {userStatus, toggleCart, cart, main, cartItemDecrease, cartItemRemove, cartItemAdd} = props;
    return props.visible ? (
        <CartContainer>
            <CartItemsWrap>
                <MobileButton onClick={toggleCart}>
                    <Button color='primary' size='large'>close</Button>
                </MobileButton>
                {Object.keys(cart.items).map((key, num) => {
                    let el = cart.items[key];
                    return <CartItem key={num}>
                        <Link to={findCategoryOnMain(main, el.category).route}><CartItemPic imageUrl={el.pic}/>
                        </Link>
                        <CartItemDesc>
                            <div>{el.name}</div>
                            <div>
                                <RemoveOneBlock onClick={() => cartItemDecrease(el)}><Remove/></RemoveOneBlock>
                                <span>{el.count}</span> x <span>${el.price}</span>
                                <AddBlock onClick={() => cartItemAdd(el)}><Add/></AddBlock>
                            </div>
                        </CartItemDesc>
                        <RemoveBlock onClick={() => cartItemRemove(el)}>
                            <Close/>
                        </RemoveBlock>
                    </CartItem>
                })}
            </CartItemsWrap>
            {userStatus ? <ButtonLink to='/checkout' onClick={toggleCart}>
                <Button variant="contained" color="primary">Checkout</Button>
            </ButtonLink> : <ButtonLink to='/auth' onClick={toggleCart}>
                <Button variant="contained" color="secondary">Sign in to process</Button>
            </ButtonLink>}
        </CartContainer>
    ) : null
}

const mapStateToProps = createStructuredSelector({
    visible: selectVisible,
    userStatus: selectUserStatus,
    cart: selectCart,
    main: selectMain,
});

export default connect(mapStateToProps, {toggleCart, cartItemDecrease, cartItemRemove, cartItemAdd})(CartComponent);