import React, { useEffect, useRef } from 'react';
import ProductCard from './productCard';
import productsData from '../data/products.json';
import arrow from '../assets/arrow.png';

function ProductList() {
  const productContainerRef = useRef(null);

  useEffect(() => {
    const productContainer = productContainerRef.current;
    const nextBtn = document.querySelector('.nxt-btn');
    const prevBtn = document.querySelector('.pre-btn');

    const handleNext = () => {
      productContainer.scrollLeft += productContainer.offsetWidth;
    };

    const handlePrevious = () => {
      productContainer.scrollLeft -= productContainer.offsetWidth;
    };

    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrevious);

    return () => {
      nextBtn.removeEventListener('click', handleNext);
      prevBtn.removeEventListener('click', handlePrevious);
    };
  }, []);

  return (
    <section className="product" id="product">
      <h2 className="product-category">Best Selling</h2>
      <button className="pre-btn"><img src={arrow} alt="" /></button>
      <button className="nxt-btn"><img src={arrow} alt="" /></button>
      <div className="product-container" ref={productContainerRef}>
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
