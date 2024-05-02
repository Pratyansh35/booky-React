import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import darklogo from '../assets/dark-logo.png';
import lightLogo from '../assets/light-logo.png';
import { Link} from 'react-router-dom';
function Nav({cartItems, setCartItems}) {
  function clrCart(){
    setCartItems([]);
    localStorage.clear();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'sticky', top: 0, left: 0, zIndex: 9, display: 'block' }}>
        <div className="container">
          <a href="#">
            <img src={darklogo} className="brand-logo" alt="Bookly - Many's favorite" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="dropdown" style={{ width: '100%' }}>
                <button className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Cart<span className="badge badge-light">{cartItems.length}</span>
                </button>
                <ul className="dropdown-menu">
                  {cartItems.map((item, index) => (
                    <li key={index} className="dropdown-item">{item.name} - ₹{item.price}</li>
                  ))}
                  <li className="btn dropdown-item btn-primary" onClick={clrCart}>delete all</li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                
                <li><Link  to="/cart" className="nav-link">Order {cartItems.length} </Link></li>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Settings
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Wish List</a></li>
                  <li><a className="dropdown-item" href="#">Account</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Order History</a></li>
                  <li><Link  to="/donate" className="dropdown-item">Donate Used Books </Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hi</a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="links-container" style={{ paddingLeft: '0px' }}>
          <li className="link-item"><a href="#" className="link">Home</a></li>
          <li className="link-item"><a href="#product" className="link">Novels</a></li>
          <li className="link-item"><a href="#" className="link">Comics</a></li>
          <li className="link-item"><a href="#" className="link">Study</a></li>
          <li className="link-item"><a href="#" className="link">Fictional</a></li>
        </ul>
      </nav>
      <header className="hero-section">
        <div className="content">
          <img src={lightLogo} className="logo" alt="" />
          <p className="sub-heading" style={{ fontFamily: 'Verdana, Geneva, Tahoma', fontStyle: 'italic' }}>
            best books collection of all time
          </p>
        </div>
      </header>
    </>
  );
}
Nav.propTypes = {
  cartItems: PropTypes.array.isRequired, 
  setCartItems: PropTypes.func.isRequired 
};
export default Nav;
