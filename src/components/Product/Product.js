import React from 'react';

const Product = (props) => {
    const {name} = props.product;
    
    return (
        <div style={{border: '1px solid tomato', margin: '15px', padding: '15px'}}>
            <h5>{name}</h5>
            <button>add to cart</button>
        </div>
    );
};

export default Product;