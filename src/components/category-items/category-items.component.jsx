import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';

import {CategoryPicture, CategoryContainer, PriceRow, AddToCart} from './category-items.style.js';
import {cartItemAdd} from "../../redux/cart/cart.actions";
import {selectCategories} from "../../redux/categories/categories.selectors";
import {createStructuredSelector} from "reselect";

function CategoryItems(props) {
    const {match} = props;
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const categoryName = match.path.replace(/.+\//, '');
    const data = categories[categoryName];
    return (
        <div>
            <h1>{categoryName}</h1>
            {data.map((el, num) => <CategoryContainer key={num}>
                    <AddToCart className='addToCart' onClick={() => {
                        dispatch(cartItemAdd(el))
                    }}> Add to cart </AddToCart>
                    <CategoryPicture imageUrl={el.pic}/>
                    <PriceRow><span>{el.name}</span> <span>{el.price}$</span></PriceRow>
                </CategoryContainer>
            )}
        </div>
    );
}

// const mapStateToProps = createStructuredSelector({
//     categories: selectCategories
// })

// export default connect(mapStateToProps, {cartAddItem: cartItemAdd})(CategoryItems);
export default CategoryItems;