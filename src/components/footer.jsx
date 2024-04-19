import React from 'react';
import lightlogo from '../assets/light-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={lightlogo} className="logo" alt=""/>
        <div className="footer-ul-container">
          <ul className="category" style={{ paddingLeft: '0px' }}>
            <li className="category-title">books category</li>
            <li><a href="#" className="footer-link">comedy books</a></li>
            <li><a href="#" className="footer-link">novelss</a></li>
            <li><a href="#" className="footer-link">top rated books</a></li>
            <li><a href="#" className="footer-link">fictions book</a></li>
            <li><a href="#" className="footer-link">singing books</a></li>
            <li><a href="#" className="footer-link">science</a></li>
            <li><a href="#" className="footer-link">maths</a></li>
            <li><a href="#" className="footer-link">socialscience</a></li>
            <li><a href="#" className="footer-link">sports books</a></li>
            <li><a href="#" className="footer-link">yoga books</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
