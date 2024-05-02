import React from 'react';
import ProductRow from '../components/ProductRow';

const Cart = () => {
  var cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  return (
    <div className="container">
      {cartData.length === 0 ? (
        <h2 className="text-center">Your cart is empty</h2>
      ) : (
        <>
          {cartData.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
          <button
            className="btn btn-primary rounded-pill float-right mt-3 btn-lg"
            onClick={() => alert("We will deliver you order.")}
          >
            Button
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
