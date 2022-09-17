import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;

    for(const test  of cart){
           total = total + test.price
    }
  
     const shipping = total > 0 ? 20 : 0

      const grandTotal = total + shipping

    return (
        <div>
                <h4>Order Items: {cart.length} </h4>
                <p>Price: ${total} </p>
                <p>shipping: ${shipping}</p>
                <p>Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;