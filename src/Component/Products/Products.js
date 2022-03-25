import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log (props.product)

    const {name, picture, price} = props.product;

    return (
        <div className='produts'>
            <img src={picture} alt="" />
            <h2 className='produts-name'>Name: {name} </h2>
            <h4>Price: ${price} </h4>
            <button className='button-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Products;