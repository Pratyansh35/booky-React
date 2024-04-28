import React from 'react';
import PropTypes from 'prop-types';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import card8 from '../assets/card8.png';

const imageMap = {
    card1, card2, card3, card4, card5, card6, card7, card8
};

const ProductRow = ({ product }) => {
    const imagePath = imageMap[product.image];
    return (
        <div className="row product">
            <div className="col-md-2">
                <img src={imagePath} alt="Sample Image" height="150" className="img-fluid" />
            </div>
            <div className="col-md-7 product-detail">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Author: {product.author}</p>
            </div>
            <div className="col-md-3 product-price d-flex align-items-center justify-content-end">
                <div className="price-wrapper">
                    <h5 className=" m-0">${product.price}</h5>
                    <span className="discounted-price">
                        <del>${product.discountPrice}</del>
                    </span>
                </div>
            </div>
        </div>
    );
}

ProductRow.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discountPrice: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductRow;
