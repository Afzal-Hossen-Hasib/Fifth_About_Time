import React, { useEffect, useState } from 'react';

const Product = () => {

    const [product, setProduct] = useState ([]);

    useEffect ( () => {
        fetch ('data.json')
        .then (res => res.json())
        .then (data => console.log (data))
    } , []) 

    return (
        <div>
            <h2>Products</h2>
        </div>
    );
};

export default Product;