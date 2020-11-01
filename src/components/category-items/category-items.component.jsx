import React from 'react';

const data = {
    overalls: [],
    socks: [],
    hats: [],
    dogs: [],
    cats: [],
}

function CategoryItems(props) {
    console.log(props);
    const { match } = props;
    const categoryName = match.path.replace(/.+\//,'');
    const data = [];
    return (
        <div>
            <div>{categoryName}</div>
            {data.map(el => {
                <div>
                    <div>{el.bg}</div>
                    <div>{el.name}</div>
                    <div>{el.price}$</div>
                </div>
            })}
        </div>
    );
}

export default CategoryItems;