import React from 'react';
import './Order.css'

const Order = (props) => {
    const {cart} = props;
    console.log (cart);

    let productName;
    for (const product of cart) {
        productName = product.name; 
    }

    return (
        <div className='order'>
            <h2>This Is Cart</h2>
            <p>Price: {productName}</p>
        </div>
    );
};

export default Order;