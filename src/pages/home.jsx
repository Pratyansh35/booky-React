import React from 'react'
import '../styles/home.css'
import Footer from '../components/footer';
import Nav from '../components/nav';

import ProductList from '../components/productList';    
import Middle from './middle';

function home() {
    return (
        <>
            <Nav />
            <ProductList />
            <Middle/>
            <Footer />
        </>
    )
}

export default home
