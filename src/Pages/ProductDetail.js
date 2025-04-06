import React from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { products } from '../data/product';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  // In a real app, this would fetch product data or use context
  // For now, we simulate finding a product
  const product = products.find(p => p.id === Number(id)) || {
    id: 1,
    name: 'Sample Product',
    price: 99.99,
    description: 'This is a placeholder for product description. In a real application, this would contain detailed information about the product.',
    image: '/placeholder.jpg',
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-left">
          <div className="product-detail-image-container">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>
        </div>
        <div className="product-detail-right">
          <h1 className="product-detail-name">{product.name}</h1>
          <div className="product-detail-price">${product.price.toFixed(2)}</div>
          <div className="product-detail-description">
            <p>{product.description}</p>
          </div>
          <div className="product-detail-actions">
            <button className="add-to-cart-btn detail-btn">
              <FiShoppingCart className="btn-icon" />
              <span>Add to Cart</span>
            </button>
            <button className="wishlist-btn detail-btn">
              <FiHeart className="btn-icon" />
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;