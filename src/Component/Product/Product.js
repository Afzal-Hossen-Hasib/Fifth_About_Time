import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Products from '../Products/Products';
import './Product.css'

const Product = () => {

    const [product, setProduct] = useState ([]);
    const [cart, setCart] = useState([]);

    useEffect ( () => {
        fetch ('data.json')
        .then (res => res.json())
        .then (data => setProduct(data))
    } , []) 

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    
    const [suggest, setSuggest] = useState ([]);

    const suggestProdct = (product) => {
        const newCart = [product]
        setSuggest (newCart)
    }

    const removeCart = () => {
        setCart ([]);
        setSuggest ([]);
    }

    return (
        <div className='container'>
            <div className="product-container">
                {
                    product.map(product => <Products 
                        key={product.id}
                        product= {product}
                        addToCart = {addToCart}
                        ></Products>)
                }
            </div>

            <div className="cart-container">
                <Order 
                cart={cart}
                product = {product}
                removeCart = {removeCart}
                suggestProdct = {suggestProdct}
                suggest = {suggest}
                ></Order> 
            </div>
        </div>
    );
};

export default Product;