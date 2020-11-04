import React from 'react';
import {connect} from 'react-redux';

import {CategoryPicture, CategoryContainer, PriceRow, AddToCart} from './category-items.style.js';
import {cartItemAdd} from "../../redux/cart/cart.actions";

function CategoryItems(props) {
    const {match, categories, cartAddItem} = props;
    const categoryName = match.path.replace(/.+\//, '');
    const data = categories[categoryName];
    return (
        <div>
            <h1>{categoryName}</h1>
            {data.map((el, num) => <CategoryContainer key={num}>
                    <AddToCart className='addToCart' onClick={() => {
                        cartAddItem(el)
                    }}> Add to cart </AddToCart>
                    <CategoryPicture imageUrl={el.pic}/>
                    <PriceRow><span>{el.name}</span> <span>{el.price}$</span></PriceRow>
                </CategoryContainer>
            )}
        </div>
    );
}

export default connect(store => ({
    categories: store.categories
}), {cartAddItem: cartItemAdd})(CategoryItems);