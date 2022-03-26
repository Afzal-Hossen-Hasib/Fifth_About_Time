import React, { useState } from 'react';
import './Order.css'


const Order = ({cart, removeCart}) => {

    let cartName = [];

    const [ran, setRan] = useState ([]);

    const randomCart = (cartName) => {
        let random = Math.floor (Math.random () * (cartName.length + 0));
        setRan(cartName[random])
    }

    for (const product of cart) {
        if (cartName.length >= 4) {

        }
        else {
            cartName.push (product.name)
        }
    }

    return (
        <div className='order'>
            <h2 className='cart-title'>Orderd List</h2>

                {
                    cartName.map ((cart,i) => {
                        return (
                            <div key = {i}>
                                <h3 className='cart-name'>Name: {cart} </h3>
                            </div>
                        )
                    })
                }

                <div>
                    <h1 className='random-title'>Suggest For You</h1>
                    <h3>{ran}</h3>
                </div>
    
            <button onClick={() => randomCart(cartName)} className='cart-button'> Choose One For Me</button> <br />
            <button onClick={() => removeCart(setRan)} className='cart-button'>Clear Item</button>
        </div>
    );
};

export default Order;