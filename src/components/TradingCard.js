import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiRepeat } from 'react-icons/fi';
import { useCoupons } from '../context/CouponContext';
import './productCard.css';

const TradingCard = ({ product }) => {
  const [isTradeRequested, setIsTradeRequested] = useState(false);
  const [showCouponList, setShowCouponList] = useState(false);
  const { userCoupons } = useCoupons();

  const handleTradeRequest = (selectedCoupon) => {
    setIsTradeRequested(true);
    setShowCouponList(false);
    alert(`Trade request sent! Offering ${selectedCoupon.code} for ${product.name}`);
  };

  return (
    <div className="product-card trading-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">₹{product.price.toFixed(2)}</p>
        </div>
      </Link>
      
      {showCouponList ? (
        <div className="coupon-selection-overlay">
          <h4>Select a coupon to trade</h4>
          {userCoupons.length > 0 ? (
            <div className="coupon-list">
              {userCoupons.map(coupon => (
                <button
                  key={coupon.id}
                  className="coupon-option"
                  onClick={() => handleTradeRequest(coupon)}
                >
                  <span className="coupon-code">{coupon.code}</span>
                  <span className="coupon-brand">{coupon.brand}</span>
                  <span className="coupon-price">₹{coupon.price}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="no-coupons">No coupons available to trade</p>
          )}
          <button 
            className="close-list-btn"
            onClick={() => setShowCouponList(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button 
          className={`trade-btn ${isTradeRequested ? 'requested' : ''}`}
          onClick={() => setShowCouponList(true)}
          disabled={isTradeRequested}
        >
          <FiRepeat className="trade-icon" />
          <span>{isTradeRequested ? 'Trade Requested' : 'Trade Coupon'}</span>
        </button>
      )}
    </div>
  );
};

export default TradingCard;