import React from 'react';
import './Order.css'


const Order = ({cart, suggestProdct, suggest, product, removeCart}) => {

    return (
        <div className='order'>
            <h2 className='cart-title'>Orderd List</h2>

               {
                   cart.map (item => <div className='cart-example' key = {item.id}>
                       <img src= {item.picture} alt="" />
                       <h3>{item.name}</h3>
                       </div>)
               }

               {
                   suggest.map (items => <div className='product-details' key = {items[Math.floor(Math.random () * product.length)].id}>
                       <img src= {items[Math.floor (Math.random() * product.length)].picture} alt="" />
                       <h3>{items[Math.floor (Math.random () * product.length)].name}</h3>
                   </div>)
               }
            
            <button onClick={() => suggestProdct(product)} className='cart-button'> Choose One For Me</button> <br />
            <button onClick={() => removeCart()} className='cart-button'>Clear Item</button>
        </div>
    );
};

export default Order;