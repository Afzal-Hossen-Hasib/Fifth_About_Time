import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Product.css'

const Product = () => {

    const [product, setProduct] = useState ([]);

    useEffect ( () => {
        fetch ('data.json')
        .then (res => res.json())
        .then (data => setProduct(data))
    } , []) 

    return (
        <div className='container'>
            <div className="product-container">
                {
                    product.map(product => <Products 
                        key={product.id}
                        product= {product}
                        ></Products>)
                }
            </div>

            <div className="cart-container">
                <h2>This Is Cart</h2>
            </div>
        </div>
    );
};

export default Product;