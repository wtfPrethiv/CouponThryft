import React from 'react';
import ProductCard from './productCard';
import { products } from '../data/product';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;