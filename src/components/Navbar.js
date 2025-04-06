import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">CouponThryft</span>
        </Link>
        
        <div className="navbar-icons">
          <div className="search-container">
          </div>
          <Link to="/cart" className="icon-container">
            <FiShoppingCart className="icon cart-icon" />
          </Link>
          <div className="icon-container" onClick={toggleSidebar}>
            <FiMenu className="icon menu-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;