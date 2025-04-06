import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <h1 className="page-title">Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-quantity">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <div className="cart-item-total">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/" className="continue-shopping-btn">
            <FiArrowLeft className="btn-icon" />
            <span>Continue Shopping</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
