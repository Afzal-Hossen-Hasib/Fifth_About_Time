import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {

    const {name, picture, price} = props.product;

    return (
        <div className='produts'>
            <img src={picture} alt="" />
            <h2 className='produts-name'>Name: {name} </h2>
            <h4>Price: ${price} </h4>
            <button onClick={() => props.addToCart (props.product)} className='button-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;