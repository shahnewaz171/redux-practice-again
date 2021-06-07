import React from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = [
        {name: 'Asus Laptop', id: 1},
        {name: 'Lenovo Laptop', id: 2},
        {name: 'Dell Laptop', id: 3},
        {name: 'HP Laptop', id: 4},
        {name: 'Toshiba Laptop', id: 5},
    ]

    return (
        <div>
            <h2>This is shop</h2>
            {
                products.map(pd => <Product product={pd} key={pd.id}></Product>)
            }
        </div>
    );
};

export default Shop;