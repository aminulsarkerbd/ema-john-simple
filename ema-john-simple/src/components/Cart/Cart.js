import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    //console.log(cart)
    const total = cart.reduce((total, product) => total + product.price, 0)
    /*let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price
    }*/
    let shipping = 0
    if (total > 50) {
        shipping = 0;
    }
    else if (total > 30) {
        shipping = 7.99;
    }
    else if (total > 0) {
        shipping = 14.99
    }
    //const tax = Math.round(total / 4.5);
    const tax = (total / 4.5).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2); //tax converted from string to number
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h5>Order Summary</h5>
            <p>Items ordered: {cart.length}</p>
            <p><small>Product price: {formatNumber(total)}</small></p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax: {tax}</small></p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;