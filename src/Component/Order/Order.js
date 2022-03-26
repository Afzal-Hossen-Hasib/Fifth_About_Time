import React from 'react';
import './Order.css'




const Order = (props) => {
    const {cart} = props;

    let allProductName = [];

    for (const product of cart) { 
        allProductName.push(product.name);
    }


    // for (let i = 0; i<allProductName.length; i++) {
    //     console.log(allProductName[i*Math.random(i)]);
    // } 

    // const filterProduct = () => {
    //    const randomItem = allProductName[Math.floor(Math.random()*allProductName.length)]
    //     return randomItem;
    // }
    // const a = allProductName[Math.abs(Math.random(allProductName.length))]
    // console.log(a);
    // filterProduct();

    // const b = filterProduct();
    // console.log(b );

    return (
        <div className='order'>
            <h2 className='cart-title'>This Is Cart</h2>
            {allProductName.map((e)=>{
                return (
                    <div>
                        <h3>Name: {e}</h3>
                    </div>
                );
            })}

            {/* <p>Random Name: {b}</p> */}
            <button className='cart-button'>Choose One For Me</button> <br />
            <button className='cart-button'>Remove Item</button>
        </div>
    );
};

export default Order;