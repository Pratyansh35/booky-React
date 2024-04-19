import React, { useEffect, useRef } from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import card8 from '../assets/card8.png';
import arrow from '../assets/arrow.png';

function Product() {
    const productContainerRef = useRef(null);

    useEffect(() => {
        const productContainers = productContainerRef.current;
        const nxtBtn = document.querySelectorAll('.nxt-btn');
        const preBtn = document.querySelectorAll('.pre-btn');

        const handleNext = () => {
            productContainers.scrollLeft += productContainers.offsetWidth;
        };

        const handlePrevious = () => {
            productContainers.scrollLeft -= productContainers.offsetWidth;
        };

        nxtBtn.forEach(btn => btn.addEventListener('click', handleNext));
        preBtn.forEach(btn => btn.addEventListener('click', handlePrevious));

        return () => {
            nxtBtn.forEach(btn => btn.removeEventListener('click', handleNext));
            preBtn.forEach(btn => btn.removeEventListener('click', handlePrevious));
        };
    }, []);

    return (
        <section className="product" id="product">
            <h2 className="product-category">best selling</h2>
            <button className="pre-btn"><img src={arrow} alt="" /></button>
            <button className="nxt-btn"><img src={arrow} alt="" /></button>
            <div className="product-container" ref={productContainerRef}>
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card1} className="product-thumb" alt="Think like  Monk -Jay Shetty" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Jay Shetty</h2>
                        <p className="product-short-des">Think Like a Monk: The secret of how to harness the power of positivity and be happy now Paperback</p>
                        <span className="price">₹190</span><span className="actual-price">₹380</span>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card2} className="product-thumb" alt="" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">E. L. James</h2>
                        <p className="product-short-des"> British-American film trilogy series that consists of three erotic
                            romantic drama films.</p>
                        <span className="price">₹75</span><span className="actual-price">₹150</span>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card3} className="product-thumb" alt="" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">S.L Arora</h2>
                        <p className="product-short-des">a short line about the cloth..</p>
                        <span className="price">₹480</span><span className="actual-price">₹960</span>
                    </div>
                </div>

                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card4} className="product-thumb" alt="" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">R.D. Sharma</h2>
                        <p className="product-short-des">a short line about the cloth..</p>
                        <span className="price">₹250</span><span className="actual-price">₹500</span>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card5} className="product-thumb" alt="" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Jerome k. Jerome</h2>
                        <p className="product-short-des">a short line about the cloth..</p>
                        <span className="price">₹200</span><span className="actual-price">₹400</span>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card6} className="product-thumb" alt="" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Robin Sharma</h2>
                        <p className="product-short-des">a self-help book by Robin Sharma, a writer and motivational
                            speaker.</p>
                        <span className="price">₹150</span><span className="actual-price">₹300</span>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card7} className="product-thumb" alt="" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Thomas A.</h2>
                        <p className="product-short-des">The complete-reference-html-css-fifth-edition</p>
                        <span className="price">₹40</span><span className="actual-price">₹80</span>
                    </div>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <span className="discount-tag">50% off</span>
                        <img src={card8} className="product-thumb" alt="" />
                        <button className="card-btn">add to Cart</button>
                    </div>
                    <div className="product-info">
                        <h2 className="product-brand">Margaret</h2>
                        <p className="product-short-des">Gone With the Wind-winner of the Pulitzer Prize and one of the
                            bestselling</p>
                        <span className="price">₹100</span><span className="actual-price">₹200</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;
