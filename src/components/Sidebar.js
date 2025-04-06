import React from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiUser, FiTag, FiGrid, FiCreditCard } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>Menu</h3>
        <FiX className="close-icon" onClick={toggleSidebar} />
      </div>
      <div className="sidebar-content">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link to="/add-coupon" className="sidebar-link" onClick={toggleSidebar}>
              <FiTag className="sidebar-icon" />
              <span>Add Coupon</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/categories" className="sidebar-link" onClick={toggleSidebar}>
              <FiGrid className="sidebar-icon" />
              <span>Categories</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/transactions" className="sidebar-link" onClick={toggleSidebar}>
              <FiCreditCard className="sidebar-icon" />
              <span>Your Transactions</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/profile" className="sidebar-link" onClick={toggleSidebar}>
              <FiUser className="sidebar-icon" />
              <span>Profile</span>
            </Link>
          </li>
          <li className='Trade'>
            <Link to="/Trade" className="sidebar-link" onClick={toggleSidebar}>
              <FiCreditCard className="sidebar-icon" />
              <span>Trade</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;