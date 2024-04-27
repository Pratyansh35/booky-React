import React from 'react';
import ProductRow from '../components/ProductRow';
import cartData from '../data/products.json';

const Cart = () => {
  return (
    <div className="container">
      {cartData.map(product => (
        <ProductRow key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Cart;