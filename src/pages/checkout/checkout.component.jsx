import React from 'react';
import {connect} from 'react-redux';

import {ItemPic, ItemRow, ItemsWrap, AddBlock, RemoveOneBlock, RemoveBlock} from './checkout.styles';
import {createStructuredSelector} from "reselect";
import {selectCart} from "../../redux/cart/cart.selectors";
import {Add, Close, Remove} from "@material-ui/icons";
import {cartItemAdd, cartItemDecrease, cartItemRemove} from '../../redux/cart/cart.actions'

function CheckoutPage(props) {
    const {cart, cartItemAdd, cartItemDecrease, cartItemRemove} = props;
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
                        <RemoveOneBlock onClick={()=>cartItemDecrease(el)}><Remove/></RemoveOneBlock>
                        {el.count}
                        <AddBlock onClick={()=>cartItemAdd(el)}><Add/></AddBlock>
                    </div>
                    <div>${el.price}</div>
                    <RemoveBlock onClick={()=>cartItemRemove(el)}><Close/></RemoveBlock>
                </ItemRow>
            }) : 'There is no items'}
            <div>PAY ROW</div>
        </ItemsWrap>
    );
}

const mapStateToProps = createStructuredSelector({
    cart: selectCart
})

export default connect(mapStateToProps, {cartItemAdd, cartItemDecrease, cartItemRemove})(CheckoutPage);