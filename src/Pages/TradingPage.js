import React from 'react';
import TradingCard from '../components/TradingCard';
import { products } from '../data/product';
import './TradingPage.css';

const TradingPage = () => {
  const tradeProducts = products.filter(product => product.trade);

  return (
    <div className="trading-page">
      <section className="hero-section">
        <div className='hero-content'>
          <h1>Trade your coupons</h1>
          <p>Exchange coupons with other users</p>
        </div>
      </section>
      <section className="trading-grid">
        {tradeProducts.map(product => (
          <TradingCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default TradingPage;