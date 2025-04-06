import React from 'react';
//import ProductGrid from '../components/ProductGrid';
import ProductSlider from '../components/ProductSlider';
import { products } from '../data/product';
import Products from '../components/Products';
import './HomePage.css';

const HomePage = () => {
  // For demonstration - replace with your actual data
  const featuredProducts = products.filter(product => product.featured) || [];
  const flashSaleProducts = products.filter(product => product.flashSale) || [];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Turn Unused Coupons into Real Savings!</h1>
          <p>Your Coupons, Your Currency!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section className="section featured-section">
        <h2 className="section-title">Featured Products</h2>
        {featuredProducts.length > 0 ? (
          <ProductSlider products={featuredProducts} />
        ) : (
          <div className="empty-state">
            <p>No featured products available yet.</p>
          </div>
        )}
      </section>

      <section className="section flash-sale-section">
        <h2 className="section-title">Flash Sale</h2>
        {flashSaleProducts.length > 0 ? (
          <ProductSlider products={flashSaleProducts} />
        ) : (
          <div className="empty-state">
            <p>No flash sale products available yet.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
