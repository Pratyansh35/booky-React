import React,{useEffect, useState} from 'react';

import Footer from '../components/footer';
import Nav from '../components/nav';
import ProductList from '../components/productList';
import Middle from '../components/middle';

function Home() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);
    return (
        <>
            <Nav cartItems={cartItems}/>
            <ProductList />
            <Middle/>
            <ProductList />
            <Footer />
        </>
    );
}

export default Home;
