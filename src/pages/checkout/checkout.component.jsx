import React from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import {
    ItemPic,
    ItemRow,
    ItemsWrap,
    AddBlock,
    RemoveOneBlock,
    RemoveBlock,
    TotalTextBlock,
    TotalBlockWrap
} from './checkout.styles';
import {createStructuredSelector} from "reselect";
import {selectCart} from "../../redux/cart/cart.selectors";
import {Add, Close, Remove} from "@material-ui/icons";
import {cartItemAdd, cartItemDecrease, cartItemRemove} from '../../redux/cart/cart.actions';
import {stripe} from '../../configs/configs';


function CheckoutPage(props) {
    const {cart, cartItemAdd, cartItemDecrease, cartItemRemove} = props;
    const total = cart.items ? Object.keys(cart.items).reduce((acc, key) => {
        let el = cart.items[key];
        return (acc + (el.count * el.price));
    }, 0).toFixed(2) : '';
    const priceForStripe = total * 100;
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('succesful payment');
            })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
    };
    return (
        <ItemsWrap>
            <ItemRow>
                <div>Product</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Remove</div>
            </ItemRow>
            {cart.items ? Object.keys(cart.items).map((key, num) => {
                let el = cart.items[key];
                return <ItemRow key={num}>
                    <ItemPic imageUrl={el.pic}/>
                    <div>{el.name}</div>
                    <div>
                        <RemoveOneBlock onClick={() => cartItemDecrease(el)}><Remove/></RemoveOneBlock>
                        {el.count}
                        <AddBlock onClick={() => cartItemAdd(el)}><Add/></AddBlock>
                    </div>
                    <div>${el.price}</div>
                    <RemoveBlock onClick={() => cartItemRemove(el)}><Close/></RemoveBlock>
                </ItemRow>
            }) : 'There is no items'}
            <TotalBlockWrap>
                <TotalTextBlock>Total: ${total}</TotalTextBlock>
                <StripeCheckout
                    label='Pay Now'
                    name='PET LIFE BETTER'
                    billingAddress
                    shippingAddress
                    image='/pet-icon.png'
                    description={`Your total is $${total}`}
                    amount={priceForStripe}
                    panelLabel='Pay Now'
                    token={onToken}
                    stripeKey={stripe.publishableApiKey}
                />
            </TotalBlockWrap>
        </ItemsWrap>
    );
}

const mapStateToProps = createStructuredSelector({
    cart: selectCart
})

export default connect(mapStateToProps, {cartItemAdd, cartItemDecrease, cartItemRemove})(CheckoutPage);