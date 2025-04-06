import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEdit, FiShoppingBag, FiHeart, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // User data now comes from the auth context
  return (
    <div className="profile-page">
      <h1 className="page-title">My Profile</h1>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.name?.charAt(0) || '?'}
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user?.name || 'User'}</h2>
            <p className="profile-email">{user?.email || 'user@example.com'}</p>
            <p className="profile-member-since">
              Member since {new Date(user?.joinDate || Date.now()).toLocaleDateString()}
            </p>
          </div>
        </div>
       
        <div className="profile-actions">
          <Link to="/profile/edit" className="profile-action-item">
            <FiEdit className="profile-action-icon" />
            <span>Edit Profile</span>
          </Link>
          <Link to="/orders" className="profile-action-item">
            <FiShoppingBag className="profile-action-icon" />
            <span>My Orders</span>
          </Link>
          <Link to="/wishlist" className="profile-action-item">
            <FiHeart className="profile-action-icon" />
            <span>Wishlist</span>
          </Link>
          <button className="profile-action-item logout-btn" onClick={handleLogout}>
            <FiLogOut className="profile-action-icon" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
